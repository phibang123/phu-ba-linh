import React from "react";

const Announcement = ({ className = "" }: { className?: string }) => {
  return (
    <div className="text-[#8C7D7D] text-xs flex items-center flex-col">
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
      <p>Announcement</p>
    </div>
  );
};

export default Announcement;
