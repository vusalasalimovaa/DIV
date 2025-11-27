import React from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

const Menu = () => {
  return (
    <div className="max-w-[1150px] mx-auto">
      <div className="flex justify-between">
        <div>
          <LeftSide />
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default Menu;
