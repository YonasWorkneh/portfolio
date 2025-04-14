import React from "react";

export default function PhotoFrame({
  width,
  height,
  img,
}: {
  width?: number;
  height?: number;
  img: string;
}) {
  return (
    <div
      className="w-full h-full border border-[#c8c6c623] rounded-2xl p-2 bg-[#37373D] relative before:contents-[''] before:absolute before:-top-0 before:left-1/2 before:w-[350px] before:h-[1px] before:bg-[linear-gradient(to_right,_transparent,_#fffdfddb,_transparent)] before:-translate-x-1/2 before:-translate-y-1/2"
      style={{
        width: width,
        height: height,
      }}
    >
      <div
        className="rounded-2xl w-full h-full"
        style={{
          background: `url(/img/${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}
