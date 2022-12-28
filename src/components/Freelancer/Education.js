import { useState } from "react";
import { useEffect } from "react";
import { CountriesApi } from "../../api";
import { Calendar } from "primereact/calendar";

const Education = () => {
  const [countries, setCountries] = useState([]);
  const [date10, setDate10] = useState(null);
  useEffect(() => {
    const getCountries = async () => {
      const response = await CountriesApi.getCountries();
      setCountries(response);
    };
    // getCountries();
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
          <div className="columns is-multiline">
            <div className="column is-3-widescreen is-full-desktop">
              <div class="field">
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
              </div>
            </div>
            <div className="column is-9-widescreen is-full-desktop">
              <div class="field">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Nombre título"
                  />
                </div>
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
            />
          </div>
          <div class="control mt-6 has-text-centered">
            <button
              //   onClick={() => update()}
              className="button is-success"
              style={{ width: "100%" }}
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
