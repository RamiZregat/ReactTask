import { Suspense, lazy, useEffect } from "react";
import RoutesLogic from "./utilities/routesLogic";
import Loading from "./components/utilityComponents/Loading";
import Error404 from "./components/utilityComponents/Error404";
import { useDispatch } from "react-redux";
import { closeCollapse } from "./utilities/redux/reducers/appPersistReducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const windowResize = new Event("resize");
    const windowResizeHandler = () => {
      if (window.outerWidth < 700) dispatch(closeCollapse());
    };
    window.addEventListener("resize", windowResizeHandler);
    window.dispatchEvent(windowResize);
    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, [dispatch]);

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
