import { Chips } from "primereact/chips";
import { useState } from "react";
import { FreelancerApi } from "../api";
import CustomSection from "./CustomSection";
import SectionContent from "./SectionContent";
import { Toast } from "primereact/toast";
import { useRef } from "react";
const Skills = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const skills = user.skills?.split("||");
  const [values1, setValues1] = useState(skills);
  const toast = useRef(null);
  const update = async () => {
    const skills = values1.join("||");
    user.skills = skills;
    const data = await FreelancerApi.updateFreelancer(user.id, user);
    localStorage.setItem("user", JSON.stringify(data));
    toast.current.show({
      severity: "success",
      summary: "Actualización correcta",
      //   detail: "Usuario incorrecto",
    });
  };

  return (
    <>
      <div className="pb-6">
        <p className="text-16-gray ">Selecciona tus habilidades</p>
        <div className="card p-fluid">
          <Chips value={values1} onChange={(e) => setValues1(e.value)} />
        </div>
        <div class="control mt-6 has-text-centered">
          <button
            onClick={() => update()}
            className="button is-success"
            style={{ width: "328px" }}
          >
            Agregar
          </button>
        </div>
      </div>
      <Toast ref={toast}></Toast>
    </>
  );
};

export default Skills;
