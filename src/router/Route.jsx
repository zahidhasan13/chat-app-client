import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChatBox from "../pages/ChatBox";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: "/",
            element: <ChatBox/>
        }
      ]
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/signup",
        element: <Signup/>
    },
    {
        path:"*",
        element: <NotFound/>
    },
  ]);

export default router;