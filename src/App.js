import React from "react";
import { render } from "react-dom";
import HomePage from "./pages/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <React.StrictMode>
      <HomePage />
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
