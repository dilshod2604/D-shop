import HomeSideBar from "@/components/ui/HomeSideBar";
import React from "react";

const Welcome = () => {
  return (
    <section>
      <div className="container">
        <div className="flex gap-x-5 ">
          <HomeSideBar />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
