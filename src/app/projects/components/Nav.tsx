// import { Link } from "lucide-react";
import Link from "next/link";
import { handleScroll } from "@/app/utils/util";

export default function Nav({ active }: { active: string }) {
  return (
    <nav className="fixed right-10 top-10 pt-20">
      <ul className="nav text-sm">
        <li className="uppercase">Contents</li>
        <li
          className={`hover:text-white transition font-tenor tracking-widest focus:text-white/80 ${
            active === "overview" ? "active" : ""
          }`}
          onClick={(e) => handleScroll(e, "overview")}
        >
          <Link href={"#overview"} onClick={(e) => handleScroll(e, "overview")}>
            Overview
          </Link>
        </li>
        <li
          className={`hover:text-white transition font-tenor tracking-widest focus:text-white/80 ${
            active === "highlights" ? "active" : ""
          }`}
          onClick={(e) => handleScroll(e, "highlights")}
        >
          <Link
            href={"#highlights"}
            onClick={(e) => handleScroll(e, "highlights")}
          >
            Highlights
          </Link>
        </li>
        <li
          className={`hover:text-white transition font-tenor tracking-widest focus:text-white ${
            active === "problem" ? "active" : ""
          }`}
          onClick={(e) => handleScroll(e, "problem")}
        >
          <Link href={"#problem"} onClick={(e) => handleScroll(e, "problem")}>
            Problem
          </Link>
        </li>
        <li
          className={`hover:text-white transition font-tenor tracking-widest focus:text-white ${
            active === "solution" ? "active" : ""
          }`}
          onClick={(e) => handleScroll(e, "solution")}
        >
          <Link href={"#solution"} onClick={(e) => handleScroll(e, "solution")}>
            Solution
          </Link>
        </li>
      </ul>
    </nav>
  );
}
