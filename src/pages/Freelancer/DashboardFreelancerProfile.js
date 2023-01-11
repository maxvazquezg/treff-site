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
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useState } from "react";
import ImageEditor from "../../components/ImageEditor";
import { Dialog } from "primereact/dialog";
import { FreelancerApi } from "../../api";
import { addUser } from "../../redux/userReducer";
import { Toast } from "primereact/toast";

const DashboardFreelancerProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);
  const userRedux = useSelector((state) => state.user.value);
  const user = { ...userRedux };
  const inputFile = useRef(null);
  const [profilePhoto, setProfilePhoto] = useState();
  const [displayProfileImage, setDisplayProfileImage] = useState(false);
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
          routes.DASHBOARD_SERVICES + "/" + routes.DASHBOARD_SERVICESACTIVE
        );
      },
    },
    {
      label: "Configuración de cuenta",
      command: (e) => {
        highlightElement(
          e,
          routes.DASHBOARD_FREELANCER_ACCOUNT + "/" + routes.DASHBOARD_FREELANCER_ACCOUNT_BASIC
        );
      },
    },
    {
      label: "Verificar cuenta",
      // icon: "pi pi-fw pi-power-off",
    },
  ];

  const onCameraClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const onChangeFile = (e) => {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    console.log(file);
    if (e.target.files.length > 0) {
      setProfilePhoto(file);
      setDisplayProfileImage(true);
    }
    // this.setState({file}); /// if you want to upload latter
  };

  const photo = () => {
    return (
      <>
        <span
          title="Actualizar photo de perfil"
          className="custom-badge"
          onClick={() => onCameraClick()}
        >
          <span className="p-badge p-component p-badge-lg">
            <img src={getURLImage("images/camera.svg", true)} alt="camera" />
          </span>
          <input
            type="file"
            id="file"
            ref={inputFile}
            style={{ display: "none" }}
            onChange={onChangeFile}
          />
        </span>
      </>
    );
  };

  const saveProfilePhoto = async (base64) => {
    const request = {
      id: user.id,
      photo: base64,
      fileName: profilePhoto.name,
    };

    const response = await FreelancerApi.updatePhoto(request);
    dispatch(addUser(response));
    setDisplayProfileImage(false);
    toast.current.show({
      severity: "success",
      summary: "Operación correcta",
      detail: "La imagen se ha actualizado correctamente",
      life: 3000,
    });
  };

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
          >
            {photo()}
          </Avatar>
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
      <Dialog
        header="Edita tu foto de perfil"
        visible={displayProfileImage}
        // style={{ width: "80vw" }}
        onHide={() => setDisplayProfileImage(false)}
        breakpoints={{ "1024px": "75vw", "960px": "75vw", "640px": "100vw" }}
      >
        <ImageEditor image={profilePhoto} getImge={saveProfilePhoto} />
      </Dialog>
      <Toast ref={toast} />
    </>
  );
};

export default DashboardFreelancerProfile;
