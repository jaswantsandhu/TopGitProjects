import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import TopRepositories from "./Pages/TopRepositories";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TopRepositories />} />
    </>
  )
);

const RouterRoot = () => {
  return <RouterProvider router={Router} />;
};

export default RouterRoot;
