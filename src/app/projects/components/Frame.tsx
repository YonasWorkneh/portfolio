import React, { ReactElement } from "react";

export default function Frame({ children }: { children: ReactElement }) {
  return (
    <div className="w-full p-5 border-t border-l border-r border-white/20 rounded-t-[2rem] mb-20 h-[700px] sm:h-[700px]">
      <div className="w-full border-t border-l border-r border-white/20 rounded-t-[1rem] mb-20 h-full">
        {/* camera -lens */}
        <div className="flex w-full justify-center relative">
          <div className="absolute top-[-1px] left-[40%] sm:left-1/2 ">
            <div className=" w-[100px] h-[20px] relative  border-b border-l border-r border-white/20 z-40 bg-[#1c1c1c]  rounded-b-md">
              <div className="w-2 h-2 rounded-full border border-white/20 absolute left-1/2 top-[-3px]"></div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
