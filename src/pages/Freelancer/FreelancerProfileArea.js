import { Menubar } from "primereact/menubar";
import { Outlet, useNavigate } from "react-router-dom";
import CustomSection from "../../components/CustomSection";
import SectionContent from "../../components/SectionContent";
import { routes } from "../../routes";

const FreelancerProfileArea = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Habilidades",
      command: () => {
        navigate(routes.DASHBOARD_FREELANCERSKILLS);
      },
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "Educación",
      command: () => {
        navigate(routes.DASHBOARD_FREELANCEREDUCATION);
      },
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "Certificación",
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "¿Por qué yo?",
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "Idiomas",
      // icon: "pi pi-fw pi-power-off",
    },
  ];

  return (
    <>
      <section className={"hero is-white"}>
        <div className="hero-body pb-0 pt-0 gray">
          <Menubar model={items} />
          <CustomSection type="light">
            <SectionContent type="light">
              <Outlet />
            </SectionContent>
          </CustomSection>
        </div>
      </section>
    </>
  );
};

export default FreelancerProfileArea;
