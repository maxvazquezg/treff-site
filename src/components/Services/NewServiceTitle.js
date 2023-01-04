import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { CategoryApi } from "../../api";
import SectionContent from "../SectionContent";
import { useForm } from "react-hook-form";
import { Chips } from "primereact/chips";
import { useDispatch, useSelector } from "react-redux";
import { addNewService } from "../../redux/serviceReducer";
import { routes } from "../../routes";

const NewServiceTitle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useOutletContext();
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const service = useSelector((state) => state.service.new);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: service?.name || "",
      categoryId: service?.categoryId || "",
    },
  });
  const [categoryMainId, setCategoryMainId] = useState(
    service?.categoryMainId || ""
  );
  const chips = service?.keyWords?.split(",") || [];
  const [values2, setValues2] = useState(chips);
  useEffect(() => {
    const getCategories = async () => {
      const cat = await CategoryApi.getCategories();
      setCategories(cat);
      loadSubCategories(service?.categoryMainId || "", cat);
      reset({categoryId: service?.categoryId})
    };
    getCategories();
  }, []);


  const loadSubCategories = (value, cats) => {
    const categoriesData = cats ? cats : categories
    const currentCat = categoriesData.filter((c) => c.id === parseInt(value));
    if (currentCat.length > 0) {
      setCategoryMainId(parseInt(value));
      setSubcategories(currentCat[0].subCategories);
    }
  };

  const next = (data) => {
    let serviceData = { ...service } || {};
    serviceData.name = data.name;
    serviceData.categoryId = data.categoryId;
    serviceData.categoryMainId = categoryMainId;
    serviceData.keyWords = values2.join(",");

    dispatch(addNewService(serviceData));
    setActiveIndex(1);
    navigate("/" + routes.DASHBOARD_FREELANCER + "/" + routes.DASHBOARD_SERVICENEW + "/" + routes.DASHBOARD_SERVICENEW_PRICE);
  };

  return (
    <>
      <SectionContent type="light">
        <form onSubmit={handleSubmit(next)}>
          <p className="plan-title">Título de tu servicio</p>
          <div class="field">
            <div class="control">
              <textarea
                {...register("name", { required: true })}
                className="textarea"
                placeholder="e.g. Hello world"
              ></textarea>
            </div>
            {errors.name && (
              <span className="error-validation">Este campo es requerido</span>
            )}
          </div>

          <div class="field">
            <div class="control">
              <div class="select">
                <select
                  value={categoryMainId}
                  onChange={(e) => loadSubCategories(e.target.value)}
                >
                  <option>Categoría</option>
                  {categories.map((c) => (
                    <option value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div class="select">
                <select {...register("categoryId", { required: true })}>
                  <option>SubCategoría</option>
                  {subcategories.map((c) => (
                    <option value={c.id}>{c.name}</option>
                  ))}
                </select>
                {errors.categoryId && (
                  <span className="error-validation">
                    Este campo es requerido
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="card p-fluid">
            <Chips
              placeholder="Palabras clave"
              value={values2}
              onChange={(e) => setValues2(e.value)}
              separator=","
            />
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

export default NewServiceTitle;
