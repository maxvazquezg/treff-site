import React, { useState } from "react";
import CustomSection from "../components/CustomSection";
import BackButton from "../components/BackButton";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FreelancerApi } from "../api";

const AdminPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    data.isAdmin = true;
    setIsLoading(true);
    await FreelancerApi.createFreelancer(data);
    // dispatch(addUser(userResponse));
    // props.onClose();
    setIsLoading(false);
  };
  return (
    <CustomSection type="white">
      <BackButton />
      <div className="m-6 has-text-justified w-full">
        <h1>ADMIN</h1>
        <br />
        <form className="pt-6 login-form" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="field">
            <input
              className="input"
              {...register("mail", { required: true })}
              placeholder="Introduce tu correo electrónico"
            />
            {errors.mail && <span>Este campo es requerido</span>}
          </div>

          {/* include validation with required or other standard HTML validation rules */}
          <div className="field">
            <input
              className="input"
              placeholder="Nombre"
              {...register("name", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.name && <span>Este campo es requerido</span>}
          </div>

          <div className="field">
            <input
              className="input"
              placeholder="Constraseña"
              type={"password"}
              {...register("password", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>Este campo es requerido</span>}
          </div>
          <div className="control">
            <button
              className={`button is-success is-medium is-fullwidth ${
                isLoading ? "is-loading" : ""
              }`}
              type="submit"
              // value={"Aceptar"}
            >
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </CustomSection>
  );
};

export default AdminPage;
