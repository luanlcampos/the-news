export default function Header() {
  return (
    <header className="m-header">
      <div className="wrapper">
        <div className="logo-container">
          <span>
            {" "}
            <a href="#">The News</a>
          </span>
        </div>
        <nav className="nav-container h-full">
          <ul className="flex flex-row h-full gap-x-3">
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
      </div>
    </header>
  );
}
