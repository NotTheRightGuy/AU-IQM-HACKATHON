import LandingPage from "./pages/landingpage";
import Sign from "./pages/signin";

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
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
