import { Suspense, lazy, useEffect } from "react";
import RoutesLogic from "./utilities/routesLogic";
import Loading from "./components/utilityComponents/Loading";
import Error404 from "./components/utilityComponents/Error404";
import { useDispatch } from "react-redux";
import {
  closeCollapse,
  openCollapse,
} from "./utilities/redux/reducers/appPersistReducer";

function App() {
  const dispatch = useDispatch();
  const windowResize = new Event("resize");
  useEffect(() => {
    const windowResizeHandler = () => {
      if (window.innerWidth < 700) {
        dispatch(closeCollapse());
      } else dispatch(openCollapse());
    };
    window.addEventListener("resize", windowResizeHandler);
    window.dispatchEvent(windowResize);
    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, []);

  const Dashboard = lazy(() => import("./components/pages/Dashboard"));
  const Projects = lazy(() => import("./components/pages/Projects"));

  const publicRoutes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/projects", element: <Projects /> },
    { path: "/404", element: <Error404 /> },
  ];

  return (
    <Suspense fallback={<Loading />}>
      <RoutesLogic {...{ publicRoutes }} />
    </Suspense>
  );
}

export default App;
