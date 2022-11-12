// The JSX file which redirects to the Main page

import LandingPage from "./pages/landingpage";
import Sign from "./pages/signin";
import Profile from "./pages/profile";
import InternSignIn from "./pages/internSignin";
import Company from "./pages/company";
import InternRegister from "./pages/internRegister";

import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
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
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
