import React from "react";
const Shimmer = () => {
  return (
    <>
      <div className="search-food">
        <input disabled id="search-input" className="loading" />
        <button id="search-btn" className="loading"></button>
      </div>
      <div className="shimmer-container">
        {Array(8) // Render 8 shimmer skeletons (adjust number based on your design)
          .fill("")
          .map((_, index) => (
            <div key={index} className="shimmer-card">
              <div className="shimmer-image"></div>
              <div className="shimmer-title"></div>
              <div className="shimmer-description"></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
