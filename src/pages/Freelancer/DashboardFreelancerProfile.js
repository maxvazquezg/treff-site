import { Avatar } from "primereact/avatar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomSection from "../../components/CustomSection";
import { routes } from "../../routes";
import { setDateString } from "../../utils/dates";
import { getURLImage } from "../../utils/images";
import { Menubar } from "primereact/menubar";
import { Outlet } from "react-router-dom";
import treffWaves from "../../assets/images/treff_waves.png";
import { useSelector } from "react-redux";

const DashboardFreelancerProfile = () => {
  const navigate = useNavigate();
  const userRedux = useSelector((state) => state.user.value);
  const user = { ...userRedux };
  useEffect(() => {
    const checkUser = () => {
      const user = { ...userRedux };
      if (!user.id) {
        navigate(routes.HOME);
      }
    };
    checkUser();
  }, [userRedux, navigate]);

  const highlightElement = (e, route) => {
    let menuItems = document.getElementsByClassName("blue-back");

    for (let element of menuItems) {
      element.classList.remove("blue-back");
    }

    e.item.className = "p-menuitem-active";
    let span = e.originalEvent.target;
    // navigate(routes.DASHBOARD_FREELANCERSKILLS);
    span.classList.add("blue-back-text");
    span.parentElement.classList.add("blue-back");
    navigate(route);
  };

  const items = [
    {
      label: "Perfil",
      command: (e) => {
        highlightElement(
          e,
          routes.DASHBOARD_FREELANCERPROFILE +
            "/" +
            routes.DASHBOARD_FREELANCERSKILLS
        );
      },
      className: "blue-back",
    },
    {
      label: "Mensajes",
      command: (e) => {
        // navigate(
        //   routes.DASHBOARD_FREELANCERPROFILE +
        //     "/" +
        //     routes.DASHBOARD_FREELANCERSKILLS
        // );
        highlightElement(e);
      },
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "Dashboard",
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "Configuración Freelancer",
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "Proyectos",
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "Servicios",
      command: (e) => {
        highlightElement(
          e,
          routes.DASHBOARD_SERVICES
          //  +
          //   "/" +
          //   routes.DASHBOARD_FREELANCERSKILLS
        );
      },
    },
    {
      label: "Configuración de cuenta",
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "Verificar cuenta",
      // icon: "pi pi-fw pi-power-off",
    },
  ];

  return (
    <>
      <section
        className="hero is-info backgroud-wave-full"
        style={{
          backgroundImage: "url(" + treffWaves + ")",
          paddingBottom: "0px !important",
        }}
      >
        <div className="hero-body has-text-centered pb-0">
          <Avatar
            className="ml-3 mt-2"
            image={getURLImage(user?.photo)}
            size="xlarge"
            shape="circle"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      </section>
      <CustomSection type="primary">
        <div className="has-text-centered p-4">
          <p className="text-light">{user.name}</p>
          <p className="text-light">{user.country}</p>
          <p className="text-16-gray">
            Activo desde el {setDateString(user?.activeDate)}
          </p>
        </div>
      </CustomSection>
      <CustomSection type="light">
        <section className="hero is-white blue">
          <Menubar model={items} />
          <div className="hero-body has-text-centered pb-0 is-light">
            <Outlet />
          </div>
        </section>
      </CustomSection>
    </>
  );
};

export default DashboardFreelancerProfile;
