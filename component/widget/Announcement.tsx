import React from "react";

const Announcement = ({ className = "" }: { className?: string }) => {
  return (
    <div className="font-itim font-medium leading-4 text-[#8C7D7D] text-xs flex items-center flex-col filter drop-shadow-[0px_3.45px_3.45px_rgba(0,0,0,0.25)]">
      <div className="bg-[#FEEEEF] p-2 rounded-[5px]">
        <div
          className={`font-medium p-4  rounded-[5px]  bg-[#F5DEDE] ${className}`}
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
