import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/home/App";
import Contandor from "./pages/home/Contandor";
import SiteFull from "./SiteFull";
import AOS from "aos";
import "aos/dist/aos.css";



// inicializa AOS
AOS.init({
  duration: 2000,
  once: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SiteFull></SiteFull>
    {/* <App /> */}
    {/* <Contandor></Contandor> */}
  </React.StrictMode>

  



);
