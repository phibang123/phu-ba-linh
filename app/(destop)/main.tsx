import Icon from "@/component/icon";
import Announcement from "@/component/widget/Announcement";
import WidgetSmith from "@/component/widget/WidgetSmith";

const mainIcon = [
  {
    icon: "/icon/about.png",
    title: "About",
  },
  {
    icon: "/icon/works.png",
    title: "Works",
  },
  {
    icon: "/icon/gallery.png",
    title: "Gallery",
  },
  {
    icon: "/icon/contact.png",
    title: "Contact",
  },
  {
    icon: "/icon/resources.png",
    title: "Resources",
  },
  {
    icon: "/icon/media.png",
    title: "Media",
  },
  {
    icon: "/icon/stuff.png",
    title: "Stuff",
  },
  {
    icon: "/icon/upload.png",
    title: "Upload",
  },
];

const bottomIcon = [
  {
    icon: "/icon/youtube.png",
    title: "Youtube",
  },
  {
    icon: "/icon/discord.png",
    title: "Discord",
  },
];

const Main = () => {
  return (
    <div
      className="p-3 bg-[#FEEEEF] flex flex-col font-mono rounded-tr-[5px]"
      style={{
        boxShadow: "-1.73px 4.31px 5.18px 0px rgba(0, 0, 0, 0.25)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        className="rounded-[5px] h-[360px] xl:h-[420px] 2xl:h-[450px] p-2 flex flex-col gap-2 justify-between"
        style={{
          backgroundImage:
            "linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          backgroundColor: "#F0F0F0",
          border: "2px solid #666",
        }}
      >
        <div className="flex justify-between">
          <div className="flex flex-col flex-wrap gap-2 max-h-[280px] xl:max-h-[340px] items-start">
            {mainIcon.map((item) => {
              return (
                <Icon
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  classNameImage="min-h-[45px]"
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-2 flex-wrap items-end justify-start">
            <div className="flex flex-row gap-2 items-start">
              <WidgetSmith />
              <Announcement />
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
              <h1 className="!font-sans m-0 text-3xl text-[#666] font-normal tracking-wider">
                Hello world! {"<3"}
              </h1>
              <p className="mt-1.5 mb-0 !font-sans font-medium text-xl leading-2  text-[#666]">@itsClover!</p>
            </div>
          </div>
        </div>
        <div className="flex mb-2 w-full justify-center items-center">
          <div className="bg-[#D9D9D9]/20 flex p-2 gap-2 rounded-[10px] shadow-[0px_3.45px_3.45px_0px_rgba(0,0,0,0.25)]">
            {bottomIcon.map((item) => {
              return (
                <Icon
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  classNameCard="flex flex-col justify-center items-center gap-1"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
