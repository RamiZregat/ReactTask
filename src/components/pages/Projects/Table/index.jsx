import React from "react";
import MUIDataTable from "mui-datatables";
import { columns } from "./columns";
import "./table.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject } from "../../../../utilities/redux/reducers/projectsReducer";

export default function Table() {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projectsReducer);

  const options = {
    download: false,
    print: false,
    responsive: "standard",
    textLabels: {
      body: {
        noMatch: "There are no projects to display, Add a new project",
      },
    },
    onRowsDelete: (rowsDeleted) => {
      const indexesDeleted = rowsDeleted.data.map((row) => row.dataIndex);
      dispatch(deleteProject(indexesDeleted));
    },
  };

  return <MUIDataTable data={projects} columns={columns} options={options} />;
}
