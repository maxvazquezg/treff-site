import { useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { CategoryApi, ServiceApi } from "../../api";
import SectionContent from "../SectionContent";
import { useForm } from "react-hook-form";
import { Chips } from "primereact/chips";
import { useDispatch, useSelector } from "react-redux";
import { addNewService } from "../../redux/serviceReducer";
import { routes } from "../../routes";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";

const NewServiceFiles = () => {
  const toast = useRef(null);
  const fileUpload = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useOutletContext();
  const service = useSelector((state) => state.service.new);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: service?.description || "",
    },
  });

  const next = async(data) => {
    let serviceData = { ...service } || {};

    const files = fileUpload.current.getFiles();
    let request = [];

    for (const element of files) {
      const file = {
        fileName: element.name,
        file: await toBase64(element),
      };
      request.push(file);
    }

    serviceData.files = request;

    dispatch(addNewService(serviceData));
    setActiveIndex(5);
    navigate(
      "/" +
        routes.DASHBOARD_FREELANCER +
        "/" +
        routes.DASHBOARD_SERVICENEW +
        "/" +
        routes.DASHBOARD_SERVICENEW_PUBLISH
    );
  };

  const onUpload = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("formFiles", data.files);

    ServiceApi.uploadFilesServices(formData);
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  const chooseOptions = { label: "Elegir", icon: "pi pi-fw pi-plus" };
  const uploadOptions = {
    label: "Subir",
    icon: "pi pi-upload",
    className: "p-button-success",
  };
  const cancelOptions = {
    label: "Cancelar",
    icon: "pi pi-times",
    className: "p-button-danger",
  };

  const test = async () => {
    const files = fileUpload.current.getFiles();
    let request = [];

    for (const element of files) {
      const file = {
        fileName: element.name,
        file: await toBase64(element),
      };
      request.push(file);
    }
    await ServiceApi.uploadFilesServices({files: request});
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <>
      <SectionContent type="light">
        <Toast ref={toast}></Toast>
        <form onSubmit={handleSubmit(next)}>
          <p className="text-dark">Galería</p>
          <p className="text-16-gray">
            Muestre sus servicios en una galería de conciertos Anime a los
            compradores a elegir su Gig presentando una variedad de su trabajo.
            Guardar y continuar pautas de imagen del Servicio para ayudarte a
            tener éxito en la plataforma.
          </p>
          <p className="text-dark mt-6">Imágenes </p>
          <p className="text-16-gray">
            Hágase notar por los compradores correctos con ejemplos visuales de
            sus servicios.
          </p>

          <FileUpload
            ref={fileUpload}
            chooseOptions={chooseOptions}
            uploadOptions={uploadOptions}
            cancelOptions={cancelOptions}
            name="demo[]"
            // url="https://primefaces.org/primereact/showcase/upload.php"
            onUpload={onUpload}
            multiple
            accept="image/*"
            maxFileSize={1000000}
            emptyTemplate={<p className="m-0">Arrastra imágenes aquí.</p>}
          />

          <div className="control mt-6 has-text-centered">
            <input
              type={"submit"}
              className="button is-success"
              style={{ width: "100%" }}
              value="Guardar y continuar"
            />
          </div>

          {/* <button onClick={() => setActiveIndex(1)}>Next</button> */}
        </form>

        <div className="control mt-6 has-text-centered">
          <button
            className="button is-success"
            style={{ width: "100%" }}
            value="TEST"
            onClick={() => test()}
          >
            TEST
          </button>
        </div>
      </SectionContent>
    </>
  );
};

export default NewServiceFiles;
