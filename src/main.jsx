import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from './Pages/Signin.jsx';
import Home from './Pages/Home.jsx';
import "./Styles/styles.css"
import Signup from './Pages/Signup.jsx';
import AppContext from './Context/AppContext.jsx';
import TermsAndConditions from './Pages/TermsAndConditions.jsx';
import Dashboard from './Pages/Dashboard.jsx';
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
        element: <Dashboard />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <AppContext>
    <RouterProvider router={router} />
  </AppContext>
);