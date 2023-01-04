import { useNavigate, useOutletContext } from "react-router-dom";
import SectionContent from "../SectionContent";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewService, removeNewService } from "../../redux/serviceReducer";
import { routes } from "../../routes";
import { ServiceApi } from "../../api";
import { RadioButton } from "primereact/radiobutton";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";

const NewServicePublish = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useOutletContext();
  const service = useSelector((state) => state.service.new);
  const userRedux = useSelector((state) => state.user.value);
  const [city, setCity] = useState(null);
  const toast = useRef(null);
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

  const next = async (data) => {
    let serviceData = { ...service } || {};
    // serviceData.description = data.description;
    serviceData.freelancerId = userRedux.id;

    dispatch(removeNewService(serviceData));
    await ServiceApi.createService(serviceData);
    toast.current.show({ severity: "success", summary: "Servicio agregado" });
    // setActiveIndex(4);
    navigate(
      "/" +
        routes.DASHBOARD_FREELANCER +
        "/" +
        routes.DASHBOARD_SERVICES +
        "/" +
        routes.DASHBOARD_SERVICESACTIVE
    );
  };

  return (
    <>
      <Toast ref={toast}></Toast>
      <SectionContent type="light">
        <form onSubmit={handleSubmit(next)}>
          <p className="text-dark">¡Ya casi terminas !</p>
          <p className="text-16-gray mt-4">
            Completa los siguientes requisitos para empezar a vender.
            <br />
            Asegurémonos de que está completamente calificado para ofrecer sus
            servicios con los siguientes controles.
          </p>
          <p className="text-16-gray mt-4 has-text-weight-bold">
            ¿Te encuentras ubicado en MEXICO?
          </p>
          <div class="field mt-4">
            <div
              className="field-radiobutton"
              style={{ backgroundColor: "#fff" }}
            >
              <RadioButton
                inputId="city1"
                name="city"
                value="Chicago"
                onChange={(e) => setCity(e.value)}
                checked={city === "Chicago"}
              />
              <label htmlFor="city1">
                No , Confirmo que todos los servicios que ofrezco son fuera de
                Mexico .
              </label>
            </div>
            <div
              className="field-radiobutton"
              style={{ backgroundColor: "#fff" }}
            >
              <RadioButton
                inputId="city2"
                name="city"
                value="Los Angeles"
                onChange={(e) => setCity(e.value)}
                checked={city === "Los Angeles"}
              />
              <label htmlFor="city2 ml-3">
                Si, Confirmo que todos los servicios que ofrezco son dentro de
                Mexico.
              </label>
            </div>
          </div>

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
      </SectionContent>
    </>
  );
};

export default NewServicePublish;
