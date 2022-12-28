import { Toast } from "primereact/toast";
import { useRef } from "react";
import { useState } from "react";
import { FreelancerApi } from "../../api";
import { useForm } from "react-hook-form";

const WhyMe = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues:{
        whyMe: user.whyMe
    }
  });
  
  const toast = useRef(null);

  const update = async (formData) => {
    user.whyMe = formData.whyMe;
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
          <p className="p-18-dark">
            <b>¿Por qué yo?</b>
          </p>
        </div>
        <form onSubmit={handleSubmit(update)}>
          <div className="card p-fluid">
            {/* <Chips value={values1} onChange={(e) => setValues1(e.value)} /> */}
            <textarea
              {...register("whyMe", { required: true, maxLength: 2000 })}
              className="textarea"
              placeholder="Breve descripción de mi persona"
            ></textarea>
            {errors.whyMe && <span>Este campo es requerido</span>}
          </div>
          <div class="control mt-6 has-text-centered is-mobile">
            <input
              type={"submit"}
              className="button is-success is-responsive is-medium"
              style={{ width: "100%" }}
              value="Agregar"
            ></input>
          </div>
        </form>
      </div>
      <Toast ref={toast}></Toast>
    </>
  );
};

export default WhyMe;
