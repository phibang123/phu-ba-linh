'use client'

import React from "react";
import { usePopup } from "../popup/PopupContext";
import AnnouncementPopupContent from "../popup/content/AnnouncementPopupContent";

const Announcement = ({ className = "" }: { className?: string }) => {
  const { addPopup, popups } = usePopup();
  
  const handleOpenPopup = () => {
    // Kiểm tra nếu popup Announcement đã mở thì không mở thêm
    const isAnnouncementPopupOpen = popups.some(popup => popup.title === 'Announcement');
    if (isAnnouncementPopupOpen) {
      return;
    }
    
    // Tạo vị trí ngẫu nhiên trên màn hình
    const position = {
      x: Math.floor(Math.random() * 300) + 50,
      y: Math.floor(Math.random() * 200) + 50
    };
    
    // Mở popup mới với nội dung là AnnouncementPopupContent
    addPopup('Announcement', <AnnouncementPopupContent />, position);
  };
  
  return (
    <div 
      className="font-itim font-medium leading-4 text-[#8C7D7D] text-xs flex items-center flex-col filter drop-shadow-[0px_3.45px_3.45px_rgba(0,0,0,0.25)] cursor-pointer"
      onClick={handleOpenPopup}
    >
      <div className="bg-[#FEEEEF] p-2 rounded-[5px] hover:bg-[#fde2e3] transition-all duration-200">
        <div
          className={`font-medium p-4 rounded-[5px] bg-[#F5DEDE] hover:bg-[#f0d0d0] transition-all duration-200 ${className}`}
        >
          <p>Test</p>
          <p>-------------------</p>
          <p>TestTestTestTest</p>
          <p>-------------------</p>
          <p>TestTestTestTest</p>
          <p>-------------------</p>
        </div>
      </div>
      <p className="leading-5">Announcement</p>
    </div>
  );
};

export default Announcement;
