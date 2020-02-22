import Link from "next/link";
import { useRouter } from "next/router";

const routerPath = [
  { pathName: "Home", url: "/" },
  { pathName: "About", url: "/about" },
  { pathName: "Menu", url: "/menu" },
  { pathName: "Chefs", url: "/chefs" },
  { pathName: "Blog", url: "/blog" },
  { pathName: "Contact", url: "/contact" }
];

const Header = () => (
  <header className="main_menu home_menu">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
              {" "}
              <img src="/img/logo.png" alt="logo" />{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse main-menu-item justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                {routerPath.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="nav-item"
                    >
                      <Link href={item.url}>
                        <a className={
                        useRouter().pathname === item.url ? "active-menu" : null
                      }>{item.pathName}</a>
                      </Link>
                     
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="menu_btn">
              <a href="#" className="btn_1 d-none d-sm-block">
                book a table
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
