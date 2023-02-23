import Link from "next/link";
import LogoSVG from "./LogoSVG";

type HeaderProps = {
  category: string;
  setCategory: any;
};

export default function Header({ category, setCategory }: HeaderProps) {
  return (
    <header className="m-header">
      <div className="wrapper">
        <div className="logo-container">
          {" "}
          <Link legacyBehavior href="/">
            <LogoSVG className="w-40" />
            {/* The News */}
          </Link>{" "}
        </div>
        <nav className="nav-container h-full">
          <ul className="flex flex-row h-full gap-x-3">
            <li
              className={`nav-item ${
                category === "technology" ? "font-bold active" : ""
              }`}
              onClick={() => setCategory("technology")}
            >
              <span>Technology</span>{" "}
            </li>
            <li
              className={`nav-item ${
                category === "science" ? "font-bold active" : ""
              }`}
              onClick={() => setCategory("science")}
            >
              <span>Science</span>{" "}
            </li>
            <li
              className={`nav-item ${
                category === "business" ? "font-bold active" : ""
              }`}
              onClick={() => setCategory("business")}
            >
              <span>Business</span>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
