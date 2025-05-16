import React from "react";
import Bottom from "./bottom";
import Header from "./header";
import Main from "./main";

const page = () => {
  return (
    <div>
      <section className="body flex flex-col items-center justify-between p-8 flex-1">
        <div className="w-1/2 h-full mt-[100px] xl:mt-[120px] 2xl:mt-[140px]">
          <Header />
          <Main />
          <Bottom />
        </div>
      </section>
    </div>
  );
};

export default page;
