import React, { useState } from "react";
import Table from "./Table";
import Modal from "../../utilityComponents/Modals";
import AddProjectForm from "./AddProjectForm";
import "./projects.css";

export default function Projects() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <div className="px-8 flex justify-between flex-col mobile:flex-row gap-8">
        <h1 className="sectionTitle w-max">Current projects</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="w-min addProjectBtn flex flex-row items-center gap-2 rounded-full text-sm pb-1 px-4"
        >
           <div className="w-max">New project</div>
           <div className="ml-1 text-lg">+</div>
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
