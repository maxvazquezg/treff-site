import React from "react";
import CustomSection from "../components/CustomSection";
import BackButton from "../components/BackButton";

const HelpCenter = () => {
  return (
    <CustomSection type="white">
      <BackButton />
      <div className="m-6">
        <h1>Centro de ayuda</h1>
        <p>Este es el centro de ayuda.</p>
      </div>
    </CustomSection>
  );
};

export default HelpCenter;
