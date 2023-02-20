import Image from "next/image";
import Head from "next/head";

export default function Header() {
  return (
    // tailwind header component with logo and nav
    <header className="m-header">
      <div className="logo-container h-full  text-black bg-white p-2 rounded-md">
        {/* <Image src="/logo.png" alt="The News logo" width={150} height={150} /> */}
        <span className="font-mono text-2xl font-bold">
          {" "}
          <a href="#">The News</a>
        </span>
      </div>
      <nav className="nav-container h-full">
        <ul className="flex flex-row gap-x-2 h-full">
          <li className="nav-item">
            <a href="#">Technology</a>
          </li>
          <li className="nav-item">
            <a href="#">Science</a>
          </li>
          <li className="nav-item">
            <a href="#">Business</a>
          </li>
        </ul>
      </nav>
    </header>
    // <header className="m-header">
    //   <div className="logo-container">
    //     <Image src="/logo.png" alt="The News logo" width={150} height={150} />
    //   </div>
    // </header>
  );
}
