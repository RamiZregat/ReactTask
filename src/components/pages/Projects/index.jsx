import React, { useState } from "react";
import Table from "./Table";
import Modal from "../../utilityComponents/Modals";
import AddProjectForm from "./AddProjectForm";
import "./projects.css";

export default function Projects() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <div className="px-8 flex justify-between">
        <h1 className="sectionTitle">Current projects</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="addProjectBtn rounded-full text-sm pb-1 px-4"
        >
          New project <span className="ml-1 text-lg">+</span>
        </button>
      </div>
      <div className="mt-6 mb-12">
        <Table />
      </div>
      <Modal
        showModal={showAddModal}
        setShowModal={setShowAddModal}
        title={"Add Project Form"}
      >
        <AddProjectForm {...{ setShowAddModal }} />
      </Modal>
    </>
  );
}
