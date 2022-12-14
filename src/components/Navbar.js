import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

export default function Navbar(props) {
  const [isActive, setIsActive] = React.useState(false);
  const clickMenuHandler = () => {
    setIsActive(!isActive);
  };

  const customStyles = {
    hamburguerSpans: {
      width: "25px",
      height: "2px",
    },
    hamburguerMenu: {
      //width: '100px',
      //height: '100%',
      color: "rgb(178, 177, 197)",
    },
    hamburguerActiveContainer: {
      height: "240px",
      position: "absolute",
      width: "100%",
      top: "95px",
      backgroundColor: "#fff",
      color: "#fff !important",
    },
    hamburguerInactiveContainer: {
      display: "none",
    },
  };

  return (
    <>
      {/* MOBILE */}
      <section
        className="is-hidden-desktop"
        style={{ backgroundColor: "#fff" }}
      >
        <nav
          className="navbar is-white"
          role="navigation"
          aria-label="main navigation"
          //   style={{ backgroundColor: "#fff" }}
        >
          <div className="navbar-brand">
            <Link className="navbar-item" to={routes.HOME}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/Treff_03_color_gradient 2.png"
                }
                alt="Logo"
                height={53}
                width={48}
                style={{ maxHeight: "200px" }}
              />
            </Link>

            <a
              href={() => false}
              role="button"
              className={`navbar-burger mt-3 is-size-1 ${
                isActive ? "is-active" : ""
              }`}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => clickMenuHandler()}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div
            style={
              isActive
                ? customStyles.hamburguerActiveContainer
                : customStyles.hamburguerInactiveContainer
            }
            className="is-hidden-desktop  left-bar"
          >
            <aside className="menu pt-3">
              <ul className="menu-list">
                <li>
                  <Link to={routes.HOME} onClick={() => clickMenuHandler()}>
                    Inicio
                  </Link>
                  <Link to={routes.EXPLORE} onClick={() => clickMenuHandler()}>
                    Explora
                  </Link>
                  <Link to={routes.HOME} onClick={() => clickMenuHandler()}>
                    Acerca de nosotros
                  </Link>
                  <Link to={routes.HOME} onClick={() => clickMenuHandler()}>
                    Contacto
                  </Link>
                  <Link to={routes.HOME} onClick={() => clickMenuHandler()}>
                    Privacidad
                  </Link>
                  <Link to={routes.HOME} onClick={() => clickMenuHandler()}>
                    Sobre Nosotros
                  </Link>
                </li>
              </ul>
              {/* {createMenuMobile()} */}
              <hr className="dropdown-divider"></hr>
            </aside>
          </div>
          <div className="navbar-end  is-hidden-mobile is-hidden-tablet-only">
            <div className="navbar-item ml-5 is-size-4">
              Bienestar y Salud en Movimiento
            </div>
          </div>
        </nav>
      </section>
      {/* {!isActive && */}
      <section
        id="top"
        className={`navbar is-hidden-desktop is-link`}
        style={{ height: "30px", minHeight: "30px" }}
      ></section>
      {/* } */}
      {/* DESKTOP */}
      <section className="navbar  is-fixed-top is-hidden-mobile is-hidden-tablet-only pl-5 pt-2">
        <nav
          role="navigation"
          aria-label="main navigation"
          style={{ color: "#fff" }}
        >
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to={routes.HOME}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/Treff_03_color_gradient 2.png"
                  }
                  alt="Logo"
                  height={53}
                  width={48}
                  style={{ maxHeight: "200px", marginRight: "40px" }}
                />
              </Link>
              <Link to={routes.EXPLORE} className="navbar-item">
                Explora
              </Link>
              <Link to={routes.PRODUCTS} className="navbar-item">
                Acerca de nosotros
              </Link>
              <Link to={routes.TECH_DATA} className="navbar-item">
                Contacto
              </Link>
              <Link to={routes.POSTS} className="navbar-item">
                Privacidad
              </Link>
              <Link to={routes.ABOUT_US} className="navbar-item">
                Sobre Nosotros
              </Link>
              {/* {createMenuDesktop()} */}
            </div>
          </div>
        </nav>
      </section>
      {/* <div id="topDesktop" className=" is-hidden-mobile is-hidden-tablet-only">
        <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
          <div>
            <img src="/images/principal.png" alt="principal" width="300" />
          </div>
        </Carousel>
      </div> */}
      {/* <Parallax bgImage="./images/Imagen1.png" bgImageAlt="Prekinesis" strength={100}>
                <div style={{ height: 770 }}>
                    <div>HTML inside the parallax</div>
                </div>
            </Parallax> */}
      {/* <div id="title"></div> */}
    </>
  );
}
