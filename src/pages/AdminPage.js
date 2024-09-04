import React, { useEffect, useRef, useState } from "react";
import BackButton from "../components/BackButton";
import { FreelancerApi } from "../api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { Link, useNavigate } from "react-router-dom";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import CustomSection from "../components/CustomSection";
import { routes } from "../routes";

const AdminPage = () => {

  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const toast = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const users = await FreelancerApi.getAdmins();
      setUsers(users);
    };
    getUsers();
  }, []);

  const onRowEditComplete1 = async (e) => {
    // let educationsTemp = [...educations];
    const usersTemp = [...users];
    let { newData, index } = e;
    console.log(newData);
    await FreelancerApi.updateFreelancer(newData.id, newData);

    usersTemp[index] = newData;
    setUsers(usersTemp);

    // educationsTemp[index] = newData;

    // setEducations(educationsTemp);
    // await updateEducations(educationsTemp);
    toast.current.show({ severity: "success", summary: "Registro modificado" });
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const deleteTemplate = (rowData, column) => {
    return (
      <div>
        <Link onClick={() => confirm(rowData)}>
          <img
            src={process.env.PUBLIC_URL + "/images/delete.png"}
            width="30"
            height={"50"}
            alt="profile"
          />
        </Link>
      </div>
    );
  };

  const confirm = (rowData) => {
    // setRowToDelete(rowData);
    confirmDialog({
      message: "¿Deseas borrar este registro?",
      header: "Confirmación de borrado",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => rowColumnClick(rowData),
      // rowColumnClick
    });
  };

  const rowColumnClick = async (rowData) => {
    const educationsTemp = users.filter((e) => e.id !== rowData.id);

    setUsers(educationsTemp);
    const userToDelete = users.find((e) => e.id === rowData.id);
    userToDelete.isAdmin = false;
    await FreelancerApi.updateFreelancer(userToDelete.id, userToDelete);
    // updateEducations(educationsTemp);
    toast.current.show({ severity: "success", summary: "Registro borrado" });
  };

  return (
    <>
      <CustomSection type="white">
        {/* <SectionContent type="light" className="pt-1 pl-2 pb-3"> */}
        <BackButton />
        <p className="subtitle-dark">ADMIN Dashboard </p>
        <div className="columns mt-1 is-multiline">
          <div
            className={
              "column is-3-widescreen is-3-desktop is-12 has-text-centered"
            }
          >
            <button
              className="button is-link"
              style={{ width: "100%" }}
              onClick={() => navigate("/" + routes.DASHBOARD_ADMIN_NEW)}
            >
              Nuevo Usuario Admin
            </button>
          </div>
        </div>
        <div className="columns mt-1 is-multiline">
          <div
            className={
              "column is-12-widescreen is-12-desktop is-12 has-text-centered"
            }
          >
            <div className="card p-fluid mb-4">
              <DataTable
                selectionMode="checkbox"
                value={users}
                selection={selectedUsers}
                onSelectionChange={(e) => setSelectedUsers(e.value)}
                editMode="row"
                dataKey="id"
                onRowEditComplete={onRowEditComplete1}
                responsiveLayout="scroll"
              >
                {/* <Column
              selectionMode="multiple"
              headerStyle={{ width: "3em" }}
            ></Column> */}
                <Column
                  rowEditor
                  headerStyle={{ width: "8%", minWidth: "8rem" }}
                  bodyStyle={{ textAlign: "center" }}
                ></Column>
                <Column
                  headerStyle={{ width: "6%", minWidth: "5rem" }}
                  body={deleteTemplate}
                />
                <Column
                  field="name"
                  header="Nombre"
                  editor={(options) => textEditor(options)}
                  style={{ width: "20%" }}
                ></Column>
                <Column
                  field="mail"
                  header="email"
                  editor={(options) => textEditor(options)}
                  style={{ width: "20%" }}
                ></Column>
              </DataTable>
            </div>
            <ConfirmDialog />
            <Toast ref={toast}></Toast>
          </div>
        </div>
        {/* </SectionContent> */}
      </CustomSection>
    </>
  );
};

export default AdminPage;
