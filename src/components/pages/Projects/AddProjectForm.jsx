import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { BiError } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addProject } from "../../../utilities/redux/reducers/projectsReducer";

export default function AddProjectForm({ setShowAddModal }) {
  const [date, setDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const datePart1 = date.toDateString().split(" ")[0];
    const datePart2 = date.getDate();
    const newDate = `${datePart1} ${datePart2}`;
    const newProject = {
      projectName: data.projectName,
      projectStatus: data.projectStatus.value,
      brand: data.brand.value,
      contributors: data.contributors.value,
      projectType: data.projectType.value,
      dueDate: newDate,
    };

    dispatch(addProject(newProject));
    setShowAddModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:gap-20 gap-0  py-0">
          <div className="flex flex-col gap-2 my-2">
            <label className="font-medium textColorSecondary">
              Project Name
            </label>
            <input
              className="input"
              {...register("projectName", { required: true, maxLength: 20 })}
            />
            {errors?.projectName && (
              <span className="text-sm text-red-700 flex flex-row items-center">
                <BiError className="text-md" /> This field is required!
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 my-2">
            <label className="font-medium textColorSecondary">
              Project Status
            </label>
            <Controller
              name="projectStatus"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <>
                  <Select
                    className="select"
                    options={[
                      {
                        label: "In progress",
                        value: "In progress",
                      },
                      {
                        label: "Approved",
                        value: "Approved",
                      },
                      {
                        label: "In review",
                        value: "In review",
                      },
                      {
                        label: "Cancelled",
                        value: "Cancelled",
                      },
                    ]}
                    value={value}
                    onChange={(e) => onChange(e)}
                  />
                  {errors?.projectStatus && (
                    <span className="text-sm text-red-700 flex flex-row items-center">
                      <BiError className="text-md" /> This field is required!
                    </span>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-20 gap-0  py-0">
          <div className="flex flex-col gap-2 my-2">
            <label className="font-medium textColorSecondary">Brand</label>
            <Controller
              name="brand"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <>
                  <Select
                    className="select"
                    options={[
                      {
                        label: "Tesla",
                        value: "Tesla",
                      },
                      {
                        label: "Apple",
                        value: "Apple",
                      },
                      {
                        label: "Nike Athlete",
                        value: "Nike Athlete",
                      },
                      {
                        label: "Sony",
                        value: "Sony",
                      },
                    ]}
                    value={value}
                    onChange={(e) => onChange(e)}
                  />
                  {errors?.brand && (
                    <span className="text-sm text-red-700 flex flex-row items-center">
                      <BiError className="text-md" /> This field is required!
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className="flex flex-col gap-2 my-2">
            <label className="font-medium textColorSecondary">
              Contributors
            </label>
            <Controller
              name="contributors"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <>
                  <Select
                    className="select"
                    options={[
                      {
                        label: "1",
                        value: "1",
                      },
                      {
                        label: "2",
                        value: "2",
                      },
                      {
                        label: "3",
                        value: "3",
                      },
                      {
                        label: "4",
                        value: "4",
                      },
                      {
                        label: "5",
                        value: "5",
                      },
                    ]}
                    value={value}
                    onChange={(e) => onChange(e)}
                  />
                  {errors?.contributors && (
                    <span className="text-sm text-red-700 flex flex-row items-center">
                      <BiError className="text-md" /> This field is required!
                    </span>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-20 gap-0  py-0">
          <div className="flex flex-col gap-2 my-2">
            <label className="font-medium textColorSecondary">
              Project type
            </label>
            <Controller
              name="projectType"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <>
                  <Select
                    className="select"
                    options={[
                      {
                        label: "New build",
                        value: "New build",
                      },
                      {
                        label: "Reconstruction",
                        value: "Reconstruction",
                      },
                      {
                        label: "Commercial",
                        value: "Commercial",
                      },
                      {
                        label: "Residential",
                        value: "Residential",
                      },
                    ]}
                    value={value}
                    onChange={(e) => onChange(e)}
                  />
                  {errors?.projectStatus && (
                    <span className="text-sm text-red-700 flex flex-row items-center">
                      <BiError className="text-md" /> This field is required!
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className="flex flex-col gap-2 my-2">
            <label className="font-medium textColorSecondary">Due date</label>
            <Controller
              name="dueDate"
              control={control}
              render={() => (
                <>
                  <DatePicker
                    className="input"
                    options={[]}
                    value={date}
                    selected={date}
                    onChange={(e) => setDate(e)}
                  />
                </>
              )}
            />
          </div>
        </div>
      </div>
      <button
        className="w-full addBtn background-transparent outline-none font-bold text-sm px-6 py-3 ease-linear transition-all duration-150"
        type="submit"
      >
        Add Project
      </button>
    </form>
  );
}
