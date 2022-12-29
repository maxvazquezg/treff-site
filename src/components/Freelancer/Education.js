import { useState } from "react";
// import { useEffect } from "react";
// import { CountriesApi } from "../../api";
import { Calendar } from "primereact/calendar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { useForm } from "react-hook-form";
import { getUserStorage, setUserStorage } from "../../utils/session";
import { FreelancerApi } from "../../api";

const Education = () => {
  //   const [countries, setCountries] = useState([]);
  const user = getUserStorage();
  const [date10, setDate10] = useState(null);
  const [educations, setEducations] = useState(user.educations);
  const [selectedProducts7, setSelectedProducts7] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const statuses = [
    { label: "México", value: "México" },
    { label: "Colombia", value: "Colombia" },
    // { label: "Out of Stock", value: "OUTOFSTOCK" },
  ];
  //   useEffect(() => {
  //     const getCountries = async () => {
  //       const response = await CountriesApi.getCountries();
  //       setCountries(response);
  //     };
  //     // getCountries();
  //   }, []);

  const updateEducations = async (educationsRequest) => {
    const request = {
      educations: educationsRequest,
      id: user.id,
    };
    const educationResponse = await FreelancerApi.updateEducations(request);
    user.educations = educationResponse;
    setUserStorage(user);
  };

  const update = async (data) => {
    data.freelancerId = user.id;
    data.year = data.year.getFullYear();

    const educationsTemp = [...educations];
    educationsTemp.push(data);

    setEducations(educationsTemp);
    updateEducations(educationsTemp);
  };

  const onRowEditComplete1 = (e) => {
    let educationsTemp = [...educations];
    let { newData, index } = e;

    educationsTemp[index] = newData;

    setEducations(educationsTemp);
    updateEducations(educationsTemp);
  };
  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const getStatusLabel = (status) => {
    return status;
    // switch (status) {
    //   case "INSTOCK":
    //     return "In Stock";

    //   case "LOWSTOCK":
    //     return "Low Stock";

    //   case "OUTOFSTOCK":
    //     return "Out of Stock";

    //   default:
    //     return "NA";
    // }
  };
  const statusBodyTemplate = (rowData) => {
    return getStatusLabel(rowData.country);
  };

  const statusEditor = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        optionLabel="label"
        optionValue="value"
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Select a Status"
        itemTemplate={(option) => {
          return (
            <span
              className={`product-badge status-${option.value.toLowerCase()}`}
            >
              {option.label}
            </span>
          );
        }}
      />
    );
  };

  const priceEditor = (options) => {
    return (
      <InputNumber
        value={options.value}
        onValueChange={(e) => options.editorCallback(e.value)}
      />
    );
  };

  const priceBodyTemplate = (rowData) => {
    return rowData.year;
  };

  const dateTemplate = (rowData, column) => {
    return (
      <div>
        <a onClick={() => rowColumnClick(rowData)}>
          <img
            src={process.env.PUBLIC_URL + "/images/delete.png"}
            width="30"
            height={"50"}
            alt="profile"
          />
        </a>
      </div>
    );
  };

  const rowColumnClick = (rowData) => {
    const educationsTemp = educations.filter(e => e.id !== rowData.id);
    setEducations(educationsTemp);
    console.log(educationsTemp);
    updateEducations(educationsTemp);
  };

  return (
    <>
      <div className="pb-6">
        <form onSubmit={handleSubmit(update)}>
          <div className="field">
            {/* <label className="label">Subject</label> */}
            <div className="control">
              <div className="select">
                <select {...register("country", { required: true })}>
                  <option>País de estudios</option>
                  <option value={"México"}>México</option>
                  <option value={"Colombia"}>Colombia</option>
                </select>
              </div>
              {errors.country && <span className="error-validation">Este campo es requerido</span>}
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                {...register("university", { required: true })}
                className="input"
                type="text"
                placeholder="Nombre de universidad"
              />
              {errors.university && <span className="error-validation">Este campo es requerido</span>}
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-3-widescreen is-full-desktop">
              <div className="field">
                {/* <label className="label">Subject</label> */}
                <div className="control">
                  <div className="select">
                    <select {...register("title", { required: true })}>
                      <option>Titulo</option>
                      <option value={"Ingeniero"}>Ingeniero</option>
                      <option value={"Licenciado"}>Licenciado</option>
                    </select>
                  </div>
                  {errors.title && <span className="error-validation">Este campo es requerido</span>}
                </div>
              </div>
            </div>
            <div className="column is-9-widescreen is-full-desktop">
              <div className="field">
                <div className="control">
                  <input
                    {...register("titleName", { required: true })}
                    className="input"
                    type="text"
                    placeholder="Nombre título"
                  />
                </div>
                {errors.titleName && <span className="error-validation">Este campo es requerido</span>}
              </div>
            </div>
          </div>
          <div className="field col-12 md:col-4">
            <label htmlFor="yearpicker">Año</label>
            <br />
            <Calendar
              id="yearpicker"
              value={date10}
              onChange={(e) => setDate10(e.value)}
              view="year"
              dateFormat="yy"
              maxDate={new Date()}
              {...register("year", { required: true })}
            />
            {errors.year && <span className="error-validation">Este campo es requerido</span>}
          </div>
          <div className="control mt-6 has-text-centered">
            <input
              type={"submit"}
              // onClick={() => update()}
              className="button is-success"
              style={{ width: "100%" }}
              value="Agregar"
            />
          </div>
        </form>
        <div className="card p-fluid mt-6">
          <DataTable
            selectionMode="checkbox"
            value={educations}
            selection={selectedProducts7}
            onSelectionChange={(e) => setSelectedProducts7(e.value)}
            editMode="row"
            dataKey="id"
            onRowEditComplete={onRowEditComplete1}
            responsiveLayout="scroll"
          >
            {/* <Column
              selectionMode="multiple"
              headerStyle={{ width: "3em" }}
            ></Column> */}
            <Column
              rowEditor
              headerStyle={{ width: "8%", minWidth: "8rem" }}
              bodyStyle={{ textAlign: "center" }}
            ></Column>
            <Column header="Borrar" body={dateTemplate} />
            <Column
              field="country"
              header="País"
              // body={statusBodyTemplate}
              editor={(options) => statusEditor(options)}
              style={{ width: "20%" }}
            ></Column>
            <Column
              field="university"
              header="Universidad"
              editor={(options) => textEditor(options)}
              style={{ width: "20%" }}
            ></Column>
            <Column
              field="title"
              header="Título"
              editor={(options) => textEditor(options)}
              style={{ width: "20%" }}
            ></Column>

            <Column
              field="titleName"
              header="Nombre de Título"
              editor={(options) => textEditor(options)}
              style={{ width: "20%" }}
            ></Column>

            <Column
              field="year"
              header="Año"
              body={priceBodyTemplate}
              editor={(options) => priceEditor(options)}
              style={{ width: "20%" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default Education;
