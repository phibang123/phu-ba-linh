"use client";

import React from "react";
import Image from "next/image";

const AnnouncementPopupContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-64">
      <div className="w-full p-4 flex flex-col bg-[#D8D8D8] items-center justify-center mb-3 rounded-[5px]">
        <Image
          src="/image/announcement.png"
          alt="Announcement"
          width={140}
          height={140}
          className="rounded-md"
        />
        <div className="flex flex-col items-start justify-center mt-2">
          <p className="font-mono font-medium text-sm text-[#8C7D7D]">
            Insert Test Album Title!
          </p>
          <p className="font-mono font-medium text-sm text-[#8C7D7D]">
            {new Date().getDate()}/{new Date().getMonth() + 1}/
            {new Date().getFullYear()}
          </p>
        </div>
      </div>

      <h3 className="font-sans text-lg font-bold mb-2 text-[#8C7D7D]">
        Announcement
      </h3>

      <div className="font-mono text-sm text-gray-600 mb-4 w-full">
        <p className="mb-2">Test</p>
        <div className="w-full h-px bg-[#F5DEDE] my-2"></div>
        <p className="mb-2">TestTestTestTest</p>
        <div className="w-full h-px bg-[#F5DEDE] my-2"></div>
        <p className="mb-2">TestTestTestTest</p>
        <div className="w-full h-px bg-[#F5DEDE] my-2"></div>
      </div>

      <div className="flex gap-2">
        <button className="font-mono text-sm px-3 py-1 bg-[#F5DEDE] rounded-md hover:bg-[#e6d2d2] transition-colors">
          View All
        </button>
        <button className="font-mono text-sm px-3 py-1 bg-[#F5DEDE] rounded-md hover:bg-[#e6d2d2] transition-colors">
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default AnnouncementPopupContent;
