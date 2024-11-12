import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Error } from "./pages/error";
import { Historic } from "./pages/historic";



const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
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
