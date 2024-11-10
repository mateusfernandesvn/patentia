import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Error } from "./pages/error";
import { Historic } from "./pages/historic";
import { Table } from "./pages/table";


const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/table",
        element:<Table/>,
      },
      {
        path:"/historico",
        element:<Historic/>,
      },
      {
        path:"*",
        element:<Error/>
      }
    ]
  }
])

export {router};
