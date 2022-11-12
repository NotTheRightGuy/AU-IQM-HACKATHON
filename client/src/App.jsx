import LandingPage from "./pages/landingpage";
import Sign from "./pages/signin";
import Profile from "./pages/profile";

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
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
