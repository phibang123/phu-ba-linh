'use client'

import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { usePopup } from "../popup/PopupContext";
import ContactPopupContent from "../popup/content/ContactPopupContent";
import NothingPopupContent from "../popup/content/NothingPopupContent";

interface IconProps {
  icon: string;
  title: string;
  classNameImage?: string;
  classNameCard?: string;
}

const Icon = ({ icon, title, classNameImage = "", classNameCard = "" }: IconProps) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { addPopup, popups } = usePopup();
  
  const handleMouseEnter = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        rotation: 15,
        scale: 1.1,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };
  
  const handleMouseLeave = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        rotation: 0,
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };
  
  const handleClick = () => {
    // Kiểm tra nếu popup Contact đã mở thì không mở thêm
    const isContactPopupOpen = popups.some(popup => popup.title === title);
    if (isContactPopupOpen) {
      return;
    }
    
    // Tạo vị trí ngẫu nhiên trên màn hình
    const position = {
      x: Math.floor(Math.random() * 300) + 50,
      y: Math.floor(Math.random() * 200) + 50
    };
    
    addPopup(title, title === 'Contact' ? <ContactPopupContent /> : <NothingPopupContent />, position);
  };
  
  return (
    <div
      className={`font-medium text-[#8C7D7D] text-xs cursor-pointer ${classNameCard}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div ref={imageRef} className={`transition-transform ${classNameImage}`}>
        <Image 
          className="filter drop-shadow-[0px_3.45px_3.45px_rgba(0,0,0,0.25)]" 
          src={icon} 
          alt={title} 
          width={35} 
          height={35} 
        />
      </div>
      <p className="font-itim text-xs font-medium leading-2">{title}</p>
    </div>
  );
};

export default Icon;
