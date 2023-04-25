import { useState, useEffect } from "react";
import { PieChartFreelancer } from "./PieChartFreelancer";
import { useSelector } from "react-redux";
import { ActiveClients } from "./ActiveClients";

const DashboardFreelancer = () => {
  const userRedux = useSelector((state) => state.user.value);
  return (
    <div className="columns">
      <div className="column is-8">
        <div className="columns">
          <div className="column">
            <PieChartFreelancer freelancerId={userRedux.id} />
          </div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>

      <div className="column is-4">
        <ActiveClients freelancerId={userRedux.id} />
      </div>
    </div>
  );
};

export default DashboardFreelancer;
