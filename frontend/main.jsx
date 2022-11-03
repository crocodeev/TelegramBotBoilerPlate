import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { StrictMode } from "react";
import Controls from "./routes/Controls";
import Dislike from "./routes/Dislike";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Controls />,
    },
    {
      path: "bye",
      element: <Dislike />,
    },
  ]);

const Routes = () => {

    return(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );
}

export default Routes;
