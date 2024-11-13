import { createBrowserRouter } from "react-router-dom"

import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Error } from "./pages/error";

const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"*",
        element:<Error/>
      }
    ]
  }
])

export {router};
