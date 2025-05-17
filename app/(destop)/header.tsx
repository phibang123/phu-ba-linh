const Header = () => {
    return (
      <div 
        className="bg-[#FEEEEF] p-3 pb-0 rounded-t-[5px] inline-block"
        style={{ 
          boxShadow: "-1.73px 4.31px 5.18px 0px rgba(0, 0, 0, 0.25)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p className="m-0 text-sm bg-white rounded-[5px] text-black px-2 py-1">
          clover&apos;s desktop
        </p>
      </div>
    );
};

export default Header;
