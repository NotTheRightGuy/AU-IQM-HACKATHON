// The JSX file which redirects to the Main page

import LandingPage from "./pages/landingpage";
import Sign from "./pages/signin";
import Profile from "./pages/profile";
import InternSignIn from "./pages/internSignin";
import Company from "./pages/company";
import InternRegister from "./pages/internRegister";
import About from "./pages/About";
import Companydetails from "./pages/Companydetails";
import ClientSignIn from "./pages/clientSignin.jsx";
import ClientRegister from "./pages/clientRegister";
import Reviews from "./pages/reviews";
import InterData from "./pages/reviews";
import FailedLogin from "./pages/failed-login";

import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/home",
        element: <LandingPage />,
    },
    {
        path: "/sign",
        element: <Sign />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/internSignIn",
        element: <InternSignIn />,
    },
    {
        path: "/internRegister",
        element: <InternRegister />,
    },
    {
        path: "/company",
        element: <Company />,
    },

    {
        path: "/about",
        element: <About />,
    },

    {
        path: "/Companydetails",
        element: <Companydetails />,
    },
    {
        path: "/clientSignin",
        element: <ClientSignIn />,
    },
    {
        path: "/clientRegister",
        element: <ClientRegister />,
    },
    {
        path: "/reviews",
        element: <Reviews />,
    },
    {
        path: "/interData",
        element: <InterData />
    },
    {
        path: "/failed-login",
        element: <FailedLogin />
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
