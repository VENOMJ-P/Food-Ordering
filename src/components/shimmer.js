import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div id="shimmer">
      <ShimmerPostList postStyle="STYLE_THREE" col={4} row={4} gap={30} />;
    </div>
  );
};

export default Shimmer;
