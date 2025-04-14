import React from "react";
import StatusBar from "./StatusBar";

export default function ProjectsApp() {
  return (
    <div className="p-3 h-full w-full bg-[#171616] relative">
      <StatusBar />
      <div className=" pt-5 px-3">
        <h1 className="text-xl">Projects</h1>
        <div className="flex justify-center items-center mt-10 relative">
          <div
            className=" w-[150px] h-[200px] rounded-tl-lg rounded-bl-lg"
            style={{
              background: "url(/img/hagurash.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="b w-[150px] h-[200px] rounded-tl-lg rounded-bl-lg -ml-2"
            style={{
              background: "url(/img/wedding.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className=" w-[650px] h-[200px] scale-125 rounded-lg relative z-30"
            style={{
              background: `url(/img/black-cube.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="w-[150px] h-[200px] rounded-tr-lg rounded-br-lg relative"
            style={{
              background: "url(/img/gta.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className=" w-[150px] h-[200px] rounded-tr-lg rounded-br-lg -ml-2"
            style={{
              background: "url(/img/legendx.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div
          className="w-full h-20 flex items-center justify-center -mb-[30px] absolute bottom-2 -ml-3"
        >
          <div
            className="w-[130px] h-[5px] rounded-full bg-[#e2e1e17b]"
          ></div>
        </div>
      </div>
    </div>
  );
}
