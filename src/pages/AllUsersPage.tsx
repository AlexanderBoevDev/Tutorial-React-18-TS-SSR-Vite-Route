import React from "react";
import { deleteUser ,getallUsers } from "../store/api";
import { Link } from "react-router-dom";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import "../scss/Users.scss"

export const AllUsersPage:React.FC = () => {
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    getUsers();
  }, [])
  const getUsers = async () => {
    // @ts-ignore
    const response = await getallUsers();
    setUser(response.data);
  }
  const deleteData = async (id) => {
    await deleteUser(id);
    getUsers();
  }
  const actionTemplate = (user) => {
    return (
      <div className="flex flex-wrap gap-2">
        <Link to={`../users/${user.id}/edit`} className="p-button p-component p-button-icon-only p-button-rounded"><span className="pi pi-user-edit"/></Link>
        <Button type="button" onClick={() => deleteData(user.id)} icon="pi pi-trash" severity="danger" rounded />
      </div>
    );
  };
  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">All User Page</h1>
      <DataTable value={ user } tableStyle={{ minWidth: '50rem' }} className="users--list-table mb-5">
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="username" header="Full name"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="phone" header="Phone"></Column>
        <Column body={ actionTemplate } headerClassName="w-10rem" />
      </DataTable>
    </div>
  )
}
