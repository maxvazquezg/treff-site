import { Chips } from "primereact/chips";
import { useState } from "react";
import { FreelancerApi } from "../../api";
import CustomSection from "../CustomSection";
import SectionContent from "../SectionContent";
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
        <div className="has-text-centered mb-4 is-hidden-desktop">
          <p className="p-18-dark"><b>Habilidades</b></p>
        </div>
        <p className="text-16-gray ">Selecciona tus habilidades</p>
        <div className="card p-fluid">
          <Chips value={values1} onChange={(e) => setValues1(e.value)} />
        </div>
        <div className="control mt-6 has-text-centered is-mobile">
          <button
            onClick={() => update()}
            className="button is-success is-responsive is-medium"
            style={{ width: "100%" }}
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
