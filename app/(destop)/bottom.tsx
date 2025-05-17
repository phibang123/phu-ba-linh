import Image from "next/image";

const Bottom = () => {
  return (
    <div
      className="max-h-[70px] bg-[#FEEEEF] p-[10px] pt-0 col-span-3 flex justify-end items-center gap-2.5 text-xs text-[#666] rounded-b-[5px]"
      style={{
        boxShadow: "-1.73px 4.31px 5.18px 0px rgba(0, 0, 0, 0.25)",
        position: "relative",
        zIndex: 3,
      }}
    >
      <Image src="/icon/speaker.png" className="cursor-pointer" alt="youtube" width={20} height={20} />

      <div className="flex flex-col items-start gap-0.5 text-xs text-[#666]">
        <div className="self-end">
          <p className="!font-mono text-xs font-medium text-[#8C7D7D]">
            {new Date().getHours()}:{new Date().getMinutes()} PM
          </p>
        </div>
        <div className="self-end">
          <p className="!font-mono text-xs font-medium text-[#8C7D7D]">
            {new Date().getDate()}/{new Date().getMonth() + 1}/
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
