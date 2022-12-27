import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { Dialog } from "primereact/dialog";
import CreateAccountModal from "./CreateAccountModal";
import LoginModal from "./LoginModal";
import { OverlayPanel } from 'primereact/overlaypanel';

export default function Navbar(props) {
  const [isActive, setIsActive] = React.useState(false);
  const [visibleCreate, setVisibleCreate] = React.useState(false);
  const [visibleLogin, setVisibleLogin] = React.useState(false);
  const clickMenuHandler = () => {
    setIsActive(!isActive);
  };
  const user = JSON.parse(localStorage.getItem("user"));
  // const customStyles = {
  //   hamburguerSpans: {
  //     width: "25px",
  //     height: "2px",
  //   },
  //   hamburguerMenu: {
  //     //width: '100px',
  //     //height: '100%',
  //     color: "rgb(178, 177, 197)",
  //   },
  //   hamburguerActiveContainer: {
  //     height: "240px",
  //     position: "absolute",
  //     width: "100%",
  //     top: "95px",
  //     backgroundColor: "#fff",
  //     color: "#fff !important",
  //   },
  //   hamburguerInactiveContainer: {
  //     display: "none",
  //   },
  // };

  return (
    <>
      {/* MOBILE */}
      {/* <section
        className="is-hidden-desktop"
        style={{ backgroundColor: "#fff" }}
      > */}
      {/* <nav
        className="navbar is-white is-hidden-desktop"
        role="navigation"
        aria-label="main navigation"
        //   style={{ backgroundColor: "#fff" }}
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to={routes.HOME}>
            <img
              src={
                process.env.PUBLIC_URL + "/images/Treff_03_color_gradient 2.png"
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
            <hr className="dropdown-divider"></hr>
          </aside>
        </div>
        <div className="navbar-end  is-hidden-mobile is-hidden-tablet-only">
          <div className="navbar-item ml-5 is-size-4">
            Bienestar y Salud en Movimiento
          </div>
        </div>
      </nav> */}
      {/* </section> */}

      {/* DESKTOP */}
      {/* <section className="navbar  is-fixed-top is-hidden-mobile is-hidden-tablet-only pl-5 pt-2"> */}
      {/* <nav
        role="navigation"
        aria-label="main navigation"
        style={{ color: "#fff" }}
        className="navbar is-fixed-top is-hidden-mobile is-hidden-tablet-only pt-2 pl-0"
      >
        <div className="navbar-brand">
          <img
            src={
              process.env.PUBLIC_URL + "/images/Treff_03_color_gradient 2.png"
            }
            alt="Logo"
            height={53}
            width={48}
            style={{ maxHeight: "200px", marginRight: "40px" }}
          />
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
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
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-link" onClick={() => setVisible(true)}>
                  Crea tu cuenta
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      {/* </section> */}

      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to={routes.HOME}>
            <img
              src={
                process.env.PUBLIC_URL + "/images/Treff_03_color_gradient 2.png"
              }
              alt="Logo"
              height={43}
              width={38}
              style={{ maxHeight: "200px", marginRight: "40px" }}
            />
          </Link>

          <a
            href={() => false}
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
            onClick={() => clickMenuHandler()}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navMenu"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link
              to={routes.EXPLORE}
              className="navbar-item"
              onClick={() => clickMenuHandler()}
            >
              Explora
            </Link>
            <Link
              to={routes.PRODUCTS}
              className="navbar-item"
              onClick={() => clickMenuHandler()}
            >
              Acerca de nosotros
            </Link>
            <Link
              to={routes.TECH_DATA}
              className="navbar-item"
              onClick={() => clickMenuHandler()}
            >
              Contacto
            </Link>
            <Link
              to={routes.POSTS}
              className="navbar-item"
              onClick={() => clickMenuHandler()}
            >
              Privacidad
            </Link>
            <Link
              to={routes.ABOUT_US}
              className="navbar-item"
              onClick={() => clickMenuHandler()}
            >
              Sobre Nosotros
            </Link>
          </div>
          {user ? (
            "Logeado"
          ) : (
            <div className="navbar-end">
              <Link
                className="navbar-item"
                onClick={() => setVisibleLogin(true)}
              >
                Iniciar sesión
              </Link>
              <div className="navbar-item">
                <div className="buttons">
                  <button
                    className="button is-link"
                    onClick={() => setVisibleCreate(true)}
                  >
                    Crea tu cuenta
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      {!isActive && (
        <section
          id="top"
          className={`navbar is-hidden-desktop is-link`}
          style={{ height: "30px", minHeight: "30px" }}
        ></section>
      )}

      <Dialog
        visible={visibleCreate}
        onHide={() => setVisibleCreate(false)}
        breakpoints={{ "960px": "75vw", "640px": "100vw" }}
        // style={{ width: "50vw" }}
      >
        <CreateAccountModal onClose={() => setVisibleCreate(false)} />
      </Dialog>

      <Dialog
        visible={visibleLogin}
        onHide={() => setVisibleLogin(false)}
        breakpoints={{ "960px": "75vw", "640px": "100vw" }}
        // style={{ width: "50vw" }}
      >
        <LoginModal onClose={() => setVisibleLogin(false)} />
      </Dialog>
    </>
  );
}
