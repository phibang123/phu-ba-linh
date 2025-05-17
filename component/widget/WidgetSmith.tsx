'use client'

import Image from "next/image";
import React from "react";
import { usePopup } from "../popup/PopupContext";
import SmithPopupContent from "../popup/content/SmithPopupContent";

  const WidgetSmith = ({ className = '' }: { className?: string }) => {
  const { addPopup, popups } = usePopup();
  
  const handleOpenPopup = () => {
    // Kiểm tra nếu popup Smith đã mở thì không mở thêm
    const isSmithPopupOpen = popups.some(popup => popup.title === 'Smith');
    if (isSmithPopupOpen) {
      return;
    }
    
    // Tạo vị trí ngẫu nhiên trên màn hình
    const position = {
      x: Math.floor(Math.random() * 300) + 50,
      y: Math.floor(Math.random() * 200) + 50
    };
    
    // Mở popup mới với nội dung là SmithPopupContent
    addPopup('Smith', <SmithPopupContent />, position);
  };
  
  return (
    <div 
      className="font-itim text-xs font-medium leading-5 text-[#8C7D7D] flex items-center flex-col filter drop-shadow-[0px_3.45px_3.45px_rgba(0,0,0,0.25)] cursor-pointer"
      onClick={handleOpenPopup}
    >
      <div className="bg-[#FEEEEF] p-2 rounded-[5px] flex items-center justify-center hover:bg-[#fde2e3] transition-all duration-200">
        <div
          className={`font-medium p-2 rounded-[5px] bg-[#F5DEDE] hover:bg-[#f0d0d0] transition-all duration-200 ${className}`}
        >
          <Image
            src="/icon/widget-smith.png"
            alt="smith"
            className="rounded-[5px]"
            width={60}
            height={60}
          />
        </div>
      </div>
      <p>Smith</p>
    </div>
  );
};

export default WidgetSmith;
