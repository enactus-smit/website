import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="fixed w-screen top-0 z-50">
        <Header />
      </div>
      <div className="mt-[108px] md:mt-[132px]">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
