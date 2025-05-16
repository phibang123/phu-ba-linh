import React from 'react';

interface BottomBarProps {
  // Props can be added here if the bottom bar needs dynamic content or behavior
}

const BottomBar: React.FC<BottomBarProps> = () => {
  return (
    <div style={{
      backgroundColor: 'rgba(115, 70, 70, 1)', // BottomBar color
      border: '2px solid rgba(255, 211, 211, 1)', // Border color
      width: 'calc(100% - 40px)', // Adjust width
      maxWidth: '368px', // Max width from data
      height: '10px', // Height from data
      borderRadius: '10px', // Corner radius
      position: 'absolute',
      bottom: '10px', // Position at the bottom
      left: '50%',
      transform: 'translateX(-50%)',
      boxSizing: 'border-box'
    }}>
      {/* Content for the BottomBar would go here if any */}
    </div>
  );
};

export default BottomBar; 