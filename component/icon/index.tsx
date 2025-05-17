import Image from "next/image";
import React from "react";

interface IconProps {
  icon: string;
  title: string;
  classNameImage?: string;
  classNameCard?: string;
}

const Icon = ({ icon, title, classNameImage = "", classNameCard = "" }: IconProps) => {
  return (
    <div
      className={`font-medium text-[#8C7D7D] text-xs ${classNameCard}`}
    >
      <div className={`${classNameImage}`}>
        <Image className="filter drop-shadow-[0px_3.45px_3.45px_rgba(0,0,0,0.25)]" src={icon} alt={title} width={35} height={35} />
      </div>
      <p className="font-itim text-xs font-medium leading-2">{title}</p>
    </div>
  );
};

export default Icon;
