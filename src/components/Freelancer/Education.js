import { useState } from "react";
import { useEffect } from "react";
import { CountriesApi } from "../../api";
import { InputNumber } from "primereact/inputnumber";

const Education = () => {
  const [countries, setCountries] = useState([]);
  const [value20, setValue20] = useState(50);
  useEffect(() => {
    const getCountries = async () => {
      const response = await CountriesApi.getCountries();
      setCountries(response);
      console.log(response);
    };
    getCountries();
  }, []);

  return (
    <>
      <div className="pb-6">
        <form>
          <div class="field">
            {/* <label class="label">Subject</label> */}
            <div class="control">
              <div className="select">
                <select>
                  <option>País de estudios</option>
                  <option value={"México"}>México</option>
                  <option value={"Colombia"}>Colombia</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Nombre de universidad"
              />
            </div>
          </div>
          <div class="field  is-grouped">
            {/* <label class="label">Subject</label> */}
            <div class="control">
              <div className="select">
                <select>
                  <option>Titulo</option>
                  <option value={"Ingeniero"}>Ingeniero</option>
                  <option value={"Licenciado"}>Licenciado</option>
                </select>
              </div>
            </div>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Nombre título"
              />
            </div>
          </div>
          <div className="field col-12 md:col-3">
            {/* <label htmlFor="minmax-buttons">Min-Max Boundaries</label> */}
            <InputNumber
              inputId="minmax-buttons"
              value={value20}
              onValueChange={(e) => setValue20(e.value)}
              showButtons
              min={1970}
              max={new Date().getFullYear()}
            />
          </div>
          <div class="control mt-6 has-text-centered">
            <button
            //   onClick={() => update()}
              className="button is-success"
              style={{ width: "328px" }}
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Education;
