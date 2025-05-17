"use client";

import React from "react";

const GalleryPopupContent: React.FC = () => {
  return (
    <div className="flex flex-col w-[850px] max-h-[600px] overflow-y-auto font-mono">
      {/* Header */}
      <div className="p-2">
        <div
          className="bg-[#FFF5F5] py-3 px-6 rounded-lg text-center mb-6 shadow-sm"
          style={{
            boxShadow: "0px 3.5px 3.5px 0px #00000040",
          }}
        >
          <h2 className="font-mono text-2xl font-semibold text-[#8C7D7D]">
            Welcome to Clover&apos;s gallery!!
          </h2>
        </div>
      </div>

      {/* Description */}
      <div className="text-center mb-8 px-4">
        <p className="text-md text-[#8C7D7D]">
          Relive cherished memories and moments, from fun times playing with
          friends in the studio to working hard together behind the scenes.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full border-b border-dashed border-[#C7B5B5] mb-8"></div>

      {/* Gallery Content - Empty State */}
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-xl text-[#C7B5B5] font-mono">
          Sorry! Currently is nothing here :&lt;
        </p>
      </div>

      {/* This section would contain the actual gallery items when available */}
      <div className="grid grid-cols-3 gap-4 px-4 hidden">
        {/* Example of how gallery items would be structured */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg overflow-hidden shadow-sm"
          >
            {/* This would be replaced with actual gallery content */}
            <div className="h-40 bg-[#F5F5F5] flex items-center justify-center">
              <span className="text-[#C7B5B5]">Image {item}</span>
            </div>
            <div className="p-2">
              <p className="text-sm text-[#8C7D7D] font-semibold">
                Photo Title
              </p>
              <p className="text-xs text-[#8C7D7D]">Description goes here</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPopupContent;
