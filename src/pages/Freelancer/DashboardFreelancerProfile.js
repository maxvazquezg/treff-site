import { Avatar } from "primereact/avatar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomSection from "../../components/CustomSection";
import SectionContent from "../../components/SectionContent";
import { routes } from "../../routes";
import { setDateString } from "../../utils/dates";
import { getURLImage } from "../../utils/images";
import { Menubar } from "primereact/menubar";
import { Routes, Route, Link, Outlet } from 'react-router-dom';



const DashboardFreelancerProfile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const checkUser = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        navigate(routes.HOME);
      }
    };
    checkUser();
  }, [navigate]);

  const items = [
    {
      label: "Perfil",
      command: () => {navigate(routes.DASHBOARD_FREELANCERPROFILE)},
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "Mensajes",
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
      // icon: "pi pi-fw pi-power-off",
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
        className="hero is-primary"
        style={{
          backgroundImage:
            "url('" +
            process.env.PUBLIC_URL +
            "/images/Treff_textura02 (1) 1.png')",
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
