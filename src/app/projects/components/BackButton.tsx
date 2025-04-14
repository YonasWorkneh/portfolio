import React from "react";

import Link from "next/link";

export default function BackButton({
  bgColor = "bg-black sm:bg-black/40",
}: {
  bgColor?: string;
}) {
  return (
    <Link
      href={"/"}
      className={`${bgColor} border border-[#45454576] rounded-full p-2 px-5 flex gap-2 items-center justify-center text-[#ffffffdb] w-fit fixed top-10 left-10 z-40`}
    >
      &larr;
      <span>Back</span>
    </Link>
  );
}
