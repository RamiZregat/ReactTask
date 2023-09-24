import {
  MdOutlineCalendarToday,
  MdOutlineFolderShared,
  MdOutlineMoreHoriz,
} from "react-icons/md";
import { SiApple, SiNike, SiSony, SiTesla } from "react-icons/si";

export const columns = [
  {
    name: "projectName",
    label: "Project name",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => {
        return (
          <div className="flex gap-2 justify-start">
            <MdOutlineFolderShared className="text-lg text-gray-400" />
            {value}
          </div>
        );
      },
    },
  },
  {
    name: "projectStatus",
    label: "Project Status",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => {
        let color = "";
        if (value === "Cancelled") {
          color = "#ff513a";
        } else if (value === "In progress") {
          color = "#4040f2";
        } else if (value === "In review") {
          color = "#ffcf0f";
        } else if (value === "Approved") {
          color = "#44c13c";
        }
        return (
          <span
            className="py-1.5 px-3 rounded-full"
            style={{ backgroundColor: color, color: "white" }}
          >
            {value}
          </span>
        );
      },
    },
  },
  {
    name: "brand",
    label: "Brand",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => {
        let Logo = "";
        if (value === "Tesla") {
          Logo = <SiTesla className="translate-y-0.5" />;
        } else if (value === "Nike Athletic") {
          Logo = <SiNike />;
        } else if (value === "Sony") {
          Logo = <SiSony />;
        } else if (value === "Apple") {
          Logo = <SiApple />;
        }
        return (
          <div className="flex gap-2 justify-start items-center">
            <span className="text-xl text-white rounded-full p-1.5 bg-gray-700">
              {Logo}
            </span>
            {value}
          </div>
        );
      },
    },
  },
  {
    name: "contributors",
    label: "Contributors",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "projectType",
    label: "Project type",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => {
        let bgColor = "";
        let TextColor = "";
        if (value === "New build") {
          bgColor = "#e6fbd9";
          TextColor = "#0f5b1d";
        } else if (value === "Reconstruction") {
          bgColor = "#ffe8d7";
          TextColor = "#931222";
        } else if (value === "Commercial") {
          bgColor = "#fff9cf";
          TextColor = "#7b5c03";
        } else if (value === "Residential") {
          bgColor = "#d8d8fe";
          TextColor = "#181894";
        }
        return (
          <span
            className="py-1.5 px-3 rounded-full font-semibold"
            style={{ backgroundColor: bgColor, color: TextColor }}
          >
            {value}
          </span>
        );
      },
    },
  },
  {
    name: "dueDate",
    label: "Due date",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value) => {
        return (
          <div className="flex gap-2 justify-start">
            <MdOutlineCalendarToday className="text-lg text-gray-400" />
            {value}
          </div>
        );
      },
    },
  },
  {
    name: "actions",
    label: "Actions",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value) => {
        return (
          <div className="flex gap-2 justify-center">
            <div className="hover:rounded-full hover:p-1 hover:bg-gray-200">
              <MdOutlineMoreHoriz className="text-2xl text-gray-400 " />
            </div>
          </div>
        );
      },
    },
  },
];
