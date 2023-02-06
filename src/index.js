import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="sticky top-0 z-50">
      <Header />
    </div>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
