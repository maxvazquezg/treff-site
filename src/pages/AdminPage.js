import React from "react";
import CustomSection from "../components/CustomSection";
import BackButton from "../components/BackButton";

const AdminPage = () => {
  return (
    <CustomSection type="white">
      <BackButton />
      <div className="m-6 has-text-justified">
        <h1>ADMIN</h1>
        <br />
        
      </div>
    </CustomSection>
  );
};

export default AdminPage;
