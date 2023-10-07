import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from './pages/dashboard/Dashboard'
import Team from "./pages/team/team";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route index element={<Dashboard/>}/>
    <Route path="team" element={<Team/>}/>
    <Route path="contacts" element={<Contacts/>}/>

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
