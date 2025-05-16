import Image from "next/image";
import React from "react";

interface IconProps {
  icon: string;
  title: string;
  classNameImage?: string;
}

const Icon = ({ icon, title, classNameImage = "" }: IconProps) => {
  return (
    <div
      className="font-medium text-[#8C7D7D] text-xs"
    >
      <div className={`${classNameImage}`}>
        <Image src={icon} alt={title} width={35} height={35} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Icon;
