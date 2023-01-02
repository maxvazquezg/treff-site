import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { Dialog } from "primereact/dialog";
import CreateAccountModal from "./CreateAccountModal";
import LoginModal from "./LoginModal";
import { OverlayPanel } from "primereact/overlaypanel";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { getURLImage } from "../utils/images";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/userReducer";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = React.useState(false);
  const [visibleCreate, setVisibleCreate] = React.useState(false);
  const [visibleLogin, setVisibleLogin] = React.useState(false);
  // const [user, setUser] = React.useState(false);
  const userRedux = useSelector((state) => state.user.value);
  const [userData, setUserData] = React.useState(userRedux);

  const clickMenuHandler = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const getUser = () =>{
      setUserData(userRedux);
    }
    getUser();
  }, [userRedux]);

  console.log(userRedux);
  // const user = { ...userRedux };
  const op = useRef(null);
  const menu = useRef(null);
  const navigate = useNavigate();

  const profileOption = (text, image, target, action) => {
    return (
      <Link
        to={target}
        onClick={() => action()}
        className="p-18-dark is-vcentered"
      >
        <div className="columns is-mobile">
          <div className="column is-2">
            {image && (
              <img src={process.env.PUBLIC_URL + image} alt="profile" />
            )}
          </div>
          <div className="column pt-3">
            <p className="p-18-black">{text}</p>
          </div>
        </div>
        {/* <img src={process.env.PUBLIC_URL + image} alt="profile" />
        <span className="ml-4">{text}</span> */}
      </Link>
    );
  };

  const menuProfile = [
    {
      text: "Perfil",
      image: "/images/profile.svg",
      target:
        routes.DASHBOARD_FREELANCER +
        "/" +
        routes.DASHBOARD_FREELANCERPROFILE +
        "/" +
        routes.DASHBOARD_FREELANCERSKILLS,
      action: () => {
        clickMenuHandler();
        op.current.toggle();
      },
    },
    {
      text: "Dashboard",
      image: "/images/dashboard.svg",
      target: "",
    },
    {
      text: "Configuración Freelancer",
      image: "/images/configFreelancer.svg",
      target: "",
    },
    {
      text: "Proyectos",
      image: "/images/project.svg",
      target: "",
    },
    {
      text: "Servicios",
      image: "/images/services.svg",
      target: "",
    },
    {
      text: "Configuración de cuenta",
      image: "/images/configIcon.svg",
      target: "",
    },
    {
      text: "Verificar cuenta",
      image: "/images/userIcon.svg",
      target: "",
    },
    {
      text: "Cerrar sesión",
      image: "",
      target: "",
      action: () => {
        setUserData(null);
        clickMenuHandler();
        dispatch(removeUser(userData.id));
        navigate(routes.HOME);
        op.current.toggle();
      },
    },
  ];

  const createMenuProfile = () => {
    return (
      <ul className="menu-list">
        {menuProfile.map((o, i) => (
          <li key={i}>{profileOption(o.text, o.image, o.target, o.action)}</li>
        ))}
      </ul>
    );
  };

  let items = [
    {
      label: "Options",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          command: () => {
            window.location.hash = "/fileupload";
          },
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
          url: "http://primetek.com.tr",
        },
      ],
    },
    {
      label: "Account",
      items: [
        {
          label: "Options",
          icon: "pi pi-fw pi-cog",
          command: () => {
            window.location.hash = "/";
          },
        },
        { label: "Sign Out", icon: "pi pi-fw pi-power-off" },
      ],
    },
  ];

  const onCloseLogin = () => {
    setVisibleLogin(false);
    clickMenuHandler();
  };

  return (
    <>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{ height: "64px" }}
      >
        <div className="navbar-brand">
          <Link
            className="navbar-item"
            to={routes.HOME}
            onClick={() => setIsActive(false)}
          >
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

          <Link
            // href={() => false}
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
          </Link>
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
          {userData ? (
            <div className="navbar-end">
              <Link
                className="navbar-item  is-vcentered"
                onClick={(e) => op.current.toggle(e)}
              >
                {userData.name}
                <Avatar
                  image={getURLImage(userData?.photo)}
                  // size="large"
                  shape="circle"
                  className="ml-4"
                />
              </Link>
            </div>
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
        breakpoints={{ "1024px": "75vw", "960px": "75vw", "640px": "100vw" }}
        // style={{ width: "50vw" }}
      >
        <LoginModal onClose={() => onCloseLogin()} />
      </Dialog>

      <OverlayPanel
        ref={op}
        id="overlay_panel"
        style={{ width: "305px" }}
        className="overlaypanel-demo"
      >
        <div className="container is-vcentered">
          <div className="columns">
            <div className="column is-3">
              <Avatar
                image={getURLImage(userData?.photo)}
                // size="large"
                shape="circle"
                className="ml-4"
              />
            </div>
            <div className="column pt-4">
              <p className="p-18-black">{userData?.name}</p>
            </div>
          </div>
          <hr className="mt-0" />
          {createMenuProfile()}
        </div>
      </OverlayPanel>
      <Menu model={items} popup ref={menu} id="popup_menu" />
    </>
  );
}
