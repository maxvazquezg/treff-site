import { useNavigate, useOutletContext } from "react-router-dom";
import SectionContent from "../SectionContent";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewService } from "../../redux/serviceReducer";
import { routes } from "../../routes";

const NewServiceDescription = () => {
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

  const next = (data) => {
    let serviceData = { ...service } || {};
    serviceData.description = data.description;

    dispatch(addNewService(serviceData));
    setActiveIndex(4);
    navigate(
      "/" +
        routes.DASHBOARD_FREELANCER +
        "/" +
        routes.DASHBOARD_SERVICENEW +
        "/" +
        routes.DASHBOARD_SERVICENEW_FILES
    );
  };

  return (
    <>
      <SectionContent type="light">
        <form onSubmit={handleSubmit(next)}>
          <p className="text-dark">Descripción</p>
          <p className="text-16-gray">
            Realice brevemente una descripción de su servicio.{" "}
          </p>
          <div class="field mt-4">
            <div class="control">
              <textarea
                {...register("description", { required: true })}
                className="textarea"
                placeholder="e.g. Hello world"
              ></textarea>
            </div>
            {errors.description && (
              <span className="error-validation">Este campo es requerido</span>
            )}
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

export default NewServiceDescription;
