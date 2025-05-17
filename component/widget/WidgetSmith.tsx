import Image from "next/image";
import React from "react";

const WidgetSmith = ({ className = '' }: { className?: string }) => {
  return (
    <div className="font-itim text-xs font-medium leading-5 text-[#8C7D7D] flex items-center flex-col filter drop-shadow-[0px_3.45px_3.45px_rgba(0,0,0,0.25)]">
      <div className="bg-[#FEEEEF] p-2 rounded-[5px] flex items-center justify-center">
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
