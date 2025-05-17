'use client'

import React from 'react';
import Image from 'next/image';

const SmithPopupContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-64">
      <div className="w-full flex justify-center mb-3">
        <Image
          src="/icon/widget-smith.png"
          alt="Smith"
          width={120}
          height={120}
          className="rounded-md"
        />
      </div>
      
      <h3 className="font-sans text-lg font-bold mb-2 text-[#8C7D7D]">Smith Widget</h3>
      
      <p className="font-mono text-sm text-gray-600 mb-4">
        This is a demo content for Smith Widget. You can drag and drop this popup
        by dragging the title section.
      </p>
      
      <div className="flex gap-2">
        <button className="font-mono text-sm px-3 py-1 bg-[#F5DEDE] rounded-md hover:bg-[#e6d2d2] transition-colors">
          Option 1
        </button>
        <button className="font-mono text-sm px-3 py-1 bg-[#F5DEDE] rounded-md hover:bg-[#e6d2d2] transition-colors">
          Option 2
        </button>
      </div>
    </div>
  );
};

export default SmithPopupContent; 