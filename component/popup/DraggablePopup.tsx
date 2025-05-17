"use client";

import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { gsap } from "gsap";

interface DraggablePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
  zIndex: number;
}

const DraggablePopup: React.FC<DraggablePopupProps> = ({
  isOpen,
  onClose,
  title,
  children,
  defaultPosition = { x: 100, y: 100 },
  zIndex,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen && !isMounted) {
      // Hiển thị popup với animation
      setIsMounted(true);
      if (popupRef.current) {
        // Thiết lập trạng thái ban đầu
        gsap.set(popupRef.current, {
          scale: 0.8,
          opacity: 0,
          y: -20,
          rotation: -2,
          transformOrigin: "center center",
        });

        // Thêm timeline cho animation mượt mà
        const tl = gsap.timeline();

        // Animation xuất hiện
        tl.to(popupRef.current, {
          scale: 1,
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
          clearProps: "rotation",
        });
      }
    } else if (!isOpen && isMounted) {
      // Ẩn popup với animation
      if (popupRef.current) {
        // Timeline cho animation biến mất
        const tl = gsap.timeline({
          onComplete: () => setIsMounted(false),
        });

        // Animation biến mất
        tl.to(popupRef.current, {
          scale: 0.85,
          opacity: 0,
          y: -15,
          rotation: 2,
          duration: 0.3,
          ease: "back.in(1.5)",
        });
      }
    }
  }, [isOpen, isMounted]);

  if (!isOpen && !isMounted) return null;

  return (
    <Draggable
      handle=".handle"
      defaultPosition={defaultPosition}
      bounds="parent"
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
    >
      <div
        ref={nodeRef}
        className="absolute bg-[#FEEEEF] rounded-[5px] overflow-hidden font-itim pointer-events-auto"
        style={{
          zIndex,
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        <div ref={popupRef} className="w-full h-full">
          {/* Header */}
          <div className="handle bg-[#FEEEEF] px-2 cursor-move rounded-t-[5px] flex justify-between items-center">
            <p className="font-mono font-medium m-0 text-sm rounded-[5px] text-[#8C7D7D] py-1">
              {title}
            </p>
            <button
              onClick={onClose}
              className="w-[20px] h-[20px] rounded-[3px] cursor-pointer bg-white hover:bg-red-100 transition-colors font-mono font-medium text-xl text-[#8C7D7D] flex items-center justify-center"
              style={{
                boxShadow: "0px 1.75px 1.75px 0px #00000040",
                lineHeight: "1",
              }}
            >
              x
            </button>
          </div>

          {/* Content */}
          <div ref={contentRef} className="bg-white m-2 p-3 mt-0 rounded-[5px]">
            {children}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default DraggablePopup;
