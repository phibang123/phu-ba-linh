import Image from "next/image";

const Bottom = () => {
  return (
    <div className="max-h-[70px] bg-[#FEEEEF] p-[10px] pt-0 col-span-3 flex justify-end items-center gap-2.5 text-xs text-[#666] rounded-b-[5px]">
      <Image src="/icon/speaker.png" alt="youtube" width={20} height={20} />

      <div className="flex flex-col items-start gap-0.5 text-xs text-[#666]">
        <div className="self-end">
          {new Date().getHours()}:{new Date().getMinutes()} PM
        </div>
        <div className="self-end">
          {new Date().getDate()}/{new Date().getMonth() + 1}/
          {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Bottom;
