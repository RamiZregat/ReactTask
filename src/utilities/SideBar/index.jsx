import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineTab } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { setActivePagePath } from "../redux/reducers/appReducer";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import "./sidebar.css";
import { toggleCollapse } from "../redux/reducers/appPersistReducer";

export default function SideBar() {
  const dispatch = useDispatch();
  const { activePagePath } = useSelector((state) => state.appReducer);
  const { collapsed } = useSelector((state) => state.appPersistReducer);

  const menuItems = [
    {
      label: "Dashboard",
      icon: <MdOutlineTab />,
      path: "/dashboard",
    },
    {
      label: "Projects",
      icon: <FiClock />,
      path: "/projects",
    },
  ];

  const handleCollapseIcon = () => {
    if (!collapsed) {
      return <BsArrowBarLeft className="fs-4" />;
    }
    return <BsArrowBarRight className="fs-4" />;
  };

  return (
    <Sidebar
      width={"250px"}
      collapsed={collapsed}
      className="sidebar min-h-screen w-inherit"
    >
      <div className="fixed w-inherit h-4/5">
        {collapsed ? (
          <>
            <h1 className="flex items-center justify-center mt-6 mb-12 font-bold text-md textColorPrimary">
              Investly <div className="textColorSecondary">.</div>
            </h1>
          </>
        ) : (
          <h1 className="flex items-center justify-center mt-6 mb-10 font-bold text-3xl textColorPrimary">
            Investly <div className="textColorSecondary">.</div>
          </h1>
        )}
        <div className="flex flex-col justify-between h-full">
          <div className="my-8">
            <Menu>
              {menuItems.map((item) => (
                <MenuItem
                  active={activePagePath === item.path}
                  key={item.path}
                  icon={item.icon}
                  component={
                    <Link
                      to={item.path}
                      onClick={() => dispatch(setActivePagePath(item.path))}
                    />
                  }
                >
                  <div className="ml-2">{item.label}</div>
                </MenuItem>
              ))}
            </Menu>
          </div>
          <Menu>
            <MenuItem
              onClick={() => dispatch(toggleCollapse())}
              icon={handleCollapseIcon()}
            >
              <div className="ml-2">Collapse</div>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Sidebar>
  );
}
