import Image from "next/image";
import React from "react";

const WidgetSmith = ({ className = '' }: { className?: string }) => {
  return (
    <div className="text-[#8C7D7D] text-xs flex items-center flex-col">
      <div className="bg-[#FEEEEF] p-2 rounded-[5px]">
        <div
          className={`font-medium p-2 rounded-[5px] bg-[#F5DEDE] ${className}`}
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
