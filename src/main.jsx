import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from './Pages/Signin.jsx';
import Home from './Pages/Home.jsx';
import "./Styles/styles.css"
import Signup from './Pages/Signup.jsx';
import AppContext from './Context/AppContext.jsx';
import TermsAndConditions from './Pages/TermsAndConditions.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import DashboardHome from './Pages/Dashboard/Home.jsx';
import Projects from './Pages/Dashboard/Projects.jsx';
import MyAccount from './Pages/Dashboard/MyAccount.jsx';
import AddProject from './Pages/Dashboard/AddProject.jsx';
import UpdateProject from './Pages/Dashboard/UpdateProject.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Signin />
      },
      {
        path: "/signin",
        element: <Signin />
      }, {
        path: "/signup",
        element: <Signup />
      }, {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <DashboardHome />
          },
          {
            path: "projects",
            element: <Projects />  
          },
          {
            path: "add-project",
            element: <AddProject />  
          },
          {
            path: "update-project",
            element: <UpdateProject />  
          },
          {
            path: "my-account",
            element: <MyAccount />  
          }
        ]
      }
    ]
  }]);

createRoot(document.getElementById("root")).render(
  <AppContext>
    <RouterProvider router={router} />
  </AppContext>
);