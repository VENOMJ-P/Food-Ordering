import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import NavigationBar from "./components/header";
import Body from "./components/restaurantSearch ";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
