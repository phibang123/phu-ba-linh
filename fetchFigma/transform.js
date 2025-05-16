
const figmaData = require('../figma_data.json');
const fs = require('fs');


function extractRelevantUINodes(node, parentCoordinates = { x: 0, y: 0 }) {
    // Bỏ qua nếu node không hiển thị (và không phải là node gốc như CANVAS)
    if (node.visible === false && node.type !== 'CANVAS') {
      return null;
    }
  
    const relevantNodeTypes = [
      'FRAME', 'GROUP', 'RECTANGLE', 'ELLIPSE', 'LINE', 'POLYGON', 'STAR', 'VECTOR',
      'TEXT', 'COMPONENT', 'INSTANCE'
      // Thêm các type khác nếu cần
    ];
  
    // Nếu type không nằm trong danh sách quan tâm VÀ không phải là CANVAS (page container)
    // thì có thể bỏ qua, trừ khi nó có children cần xử lý (ví dụ GROUP)
    if (!relevantNodeTypes.includes(node.type) && node.type !== 'CANVAS' && node.type !== 'PAGE') { // PAGE cũng có thể là một cách đặt tên cho Frame
        // Với GROUP, ta vẫn muốn xử lý children của nó
        if (node.type === 'GROUP' && node.children && node.children.length > 0) {
            // Tiếp tục xử lý children cho GROUP
        } else if (!relevantNodeTypes.includes(node.type)) {
          return null;
        }
    }
  
  
    const uiNode = {
      id: node.id,
      name: node.name,
      type: node.type,
      // Sử dụng absoluteBoundingBox để có tọa độ chính xác trên trang
      // hoặc tính toán tọa độ tương đối nếu cần
      x: node.absoluteBoundingBox ? node.absoluteBoundingBox.x : node.x,
      y: node.absoluteBoundingBox ? node.absoluteBoundingBox.y : node.y,
      width: node.absoluteBoundingBox ? node.absoluteBoundingBox.width : node.width,
      height: node.absoluteBoundingBox ? node.absoluteBoundingBox.height : node.height,
      // Bạn có thể muốn tính x, y tương đối với parent node được chọn lọc:
      // relativeX: node.x, (nếu node.x là so với parent trực tiếp)
      // relativeY: node.y,
    };
  
    // Trích xuất các thuộc tính style chung
    if (node.opacity !== undefined) uiNode.opacity = node.opacity;
    if (node.fills && node.fills.length > 0) {
      // Chỉ lấy các fill có màu và đang hiển thị
      uiNode.fills = node.fills.filter(fill => fill.type !== 'IMAGE' && fill.visible !== false && fill.color);
      // Nếu bạn muốn xử lý IMAGE fill, thêm logic riêng
      if (uiNode.fills.length === 0) delete uiNode.fills;
    }
    if (node.strokes && node.strokes.length > 0 && node.strokeWeight > 0) {
      uiNode.strokes = node.strokes.filter(stroke => stroke.visible !== false && stroke.color);
      if (uiNode.strokes.length === 0) delete uiNode.strokes;
      else uiNode.strokeWeight = node.strokeWeight;
    }
    if (node.effects && node.effects.length > 0) {
      uiNode.effects = node.effects.filter(effect => effect.visible !== false);
      if (uiNode.effects.length === 0) delete uiNode.effects;
    }
    if (node.cornerRadius && typeof node.cornerRadius === 'number') uiNode.cornerRadius = node.cornerRadius;
    if (node.rectangleCornerRadii) uiNode.rectangleCornerRadii = node.rectangleCornerRadii;
  
  
    // Trích xuất thuộc tính riêng cho từng loại node
    switch (node.type) {
      case 'TEXT':
        uiNode.characters = node.characters;
        // Đơn giản hóa thông tin style cho text
        uiNode.textStyle = {
          fontFamily: node.style.fontFamily,
          fontWeight: node.style.fontWeight,
          fontSize: node.style.fontSize,
          textAlignHorizontal: node.style.textAlignHorizontal,
          textAlignVertical: node.style.textAlignVertical,
          lineHeightPx: node.style.lineHeightPx,
          letterSpacing: node.style.letterSpacing,
        };
        // Màu chữ thường nằm trong fills của Text node
        break;
      case 'FRAME':
      case 'COMPONENT':
      case 'INSTANCE':
        // Auto Layout properties
        if (node.layoutMode && node.layoutMode !== 'NONE') {
          uiNode.autoLayout = {
            layoutMode: node.layoutMode,
            itemSpacing: node.itemSpacing || 0,
            paddingLeft: node.paddingLeft || 0,
            paddingRight: node.paddingRight || 0,
            paddingTop: node.paddingTop || 0,
            paddingBottom: node.paddingBottom || 0,
            primaryAxisAlignItems: node.primaryAxisAlignItems,
            counterAxisAlignItems: node.counterAxisAlignItems,
          };
        }
        if (node.clipsContent) uiNode.clipsContent = node.clipsContent; // overflow: hidden
        if (node.constraints) uiNode.constraints = node.constraints;
        if (node.type === 'INSTANCE') {
          uiNode.componentId = node.componentId;
          // Bạn có thể muốn xử lý componentProperties ở đây
        }
        break;
      // Thêm các case khác nếu cần (VECTOR, RECTANGLE,...)
      // RECTANGLE, ELLIPSE,... thường đã đủ thông tin từ style chung ở trên
    }
  
  
    // Xử lý đệ quy cho các node con
    if (node.children && node.children.length > 0) {
      uiNode.children = node.children
        .map(child => extractRelevantUINodes(child, { x: uiNode.x, y: uiNode.y }))
        .filter(child => child !== null); // Loại bỏ các children không hợp lệ (ví dụ: không hiển thị)
      if (uiNode.children.length === 0) delete uiNode.children;
    }
  
    // Nếu là một GROUP mà không có style riêng và không có children hiển thị, có thể bỏ qua
    if (node.type === 'GROUP' && (!uiNode.children || uiNode.children.length === 0)) {
        return null;
    }
  
    return uiNode;
  }
  
  // Cách sử dụng:
  // Giả sử `figmaData` là JSON bạn nhận được từ API
  // Và bạn muốn xử lý page đầu tiên
  const firstPage = figmaData.document.children[2];
  const simplifiedUITree = firstPage.children
     .map(childOfPage => extractRelevantUINodes(childOfPage))
     .filter(node => node !== null);

     fs.writeFileSync('./third_page_figma_data.json', JSON.stringify(simplifiedUITree, null, 2));
  