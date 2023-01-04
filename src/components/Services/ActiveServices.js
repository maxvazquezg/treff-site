import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import ActiveServicesByFreelancer from "./ActiveServicesByFreelancer";

const ActiveServices = () => {

  const userRedux = useSelector((state) => state.user.value);
  const [user] = useState(userRedux);
  const navigate = useNavigate();

  const addNew = () => {
    // navigate("..");
    // navigate("/");
    navigate("/" + routes.DASHBOARD_FREELANCER + "/" + routes.DASHBOARD_SERVICENEW + "/" + routes.DASHBOARD_SERVICENEW_TITLE);
  };

  return (
    <>
      <div className="mb-4">
        <ActiveServicesByFreelancer freelancerId={user.id} addNew={addNew} />
      </div>
    </>
  );
};

export default ActiveServices;
