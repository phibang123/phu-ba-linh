import Icon from "@/component/icon";
import Announcement from "@/component/widget/Announcement";
import WidgetSmith from "@/component/widget/WidgetSmith";

const mainIcon = [
  {
    icon: "/icon/about.png",
    title: "about",
  },
  {
    icon: "/icon/works.png",
    title: "works",
  },
  {
    icon: "/icon/gallery.png",
    title: "gallery",
  },
  {
    icon: "/icon/contact.png",
    title: "contact",
  },
  {
    icon: "/icon/resources.png",
    title: "resources",
  },
  {
    icon: "/icon/media.png",
    title: "media",
  },
  {
    icon: "/icon/stuff.png",
    title: "stuff",
  },
  {
    icon: "/icon/upload.png",
    title: "upload",
  },
];

const bottomIcon = [
  {
    icon: "/icon/youtube.png",
    title: "youtube",
  },
  {
    icon: "/icon/discord.png",
    title: "discord",
  },
];

const Main = () => {
  return (
    <div className="p-3 bg-[#FEEEEF] flex flex-col font-mono rounded-tr-[5px] ">
      <div
        className="rounded-[5px] h-[360px] md:h-[360px] xl:h-[550px] 2xl:h-[600px] p-2 flex flex-col gap-2 justify-between"
        style={{
          backgroundImage:
            "linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          backgroundColor: "#F0F0F0",
          border: "2px solid #666",
        }}
      >
        <div className="flex justify-between">
          <div className="flex flex-col flex-wrap gap-2 max-h-[280px] xl:max-h-[400px] items-start" >
            {mainIcon.map((item) => {
              return (
                <Icon
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  classNameImage="min-h-[40px]"
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-2 flex-wrap items-end justify-start">
            <div className="flex flex-row gap-2 items-center">
              <WidgetSmith />
              <Announcement />
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
              <h1 className="m-0 text-3xl text-[#666] font-normal tracking-wider">
                Hello world! {"<3"}
              </h1>
              <p className="mt-1.5 mb-0 text-sm text-[#666]">@itsClover!</p>
            </div>
          </div>
        </div>
        <div className="flex mb-2 w-full justify-center items-center">
          <div className="bg-[#D9D9D9]/20 flex p-2 gap-4 rounded-[10px] shadow-[0px_3.45px_3.45px_0px_rgba(0,0,0,0.25)]">
            {bottomIcon.map((item) => {
              return (
                <Icon
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  classNameImage="flex flex-col justify-center items-center"
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
