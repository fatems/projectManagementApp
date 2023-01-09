import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";
import Dashbaord from "./pages/Dashboard";
import Login2 from "./pages/Login2";
import Login3 from "./pages/Login3";
import Login4 from "./pages/Login4";
import Projects from "./pages/Projects";
import Workspace from "./pages/Workspace";
import PersistentDrawerLeft from "./components/PersistantDrawerLeft";
import NewProjectType from "./pages/NewProjectType";
import {useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState("false");
  const makeSession = (uname, pass) => {
    localStorage.setItem("username", uname);
    localStorage.setItem("password", pass);
    setIsAuthenticated(true);
  };
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={"/Login4"} />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Login2" element={<Login2 />} />
      <Route path="/Login3" element={<Login3 />} />
      <Route path="/Login4" element={<Login4 isAuthenticated={isAuthenticated} makeSession={makeSession} />} />
      <Route element={<PersistentDrawerLeft />}>
        <Route path="/Dashboard" element={<Dashbaord />} />
      </Route>
      <Route element={<PersistentDrawerLeft />}>
        <Route path="/Projects" element={<Projects />} />
      </Route>
      <Route element={<PersistentDrawerLeft />}>
        <Route path="/Projects/:projectId" element={<Workspace />} />
      </Route>

      <Route element={<PersistentDrawerLeft />}>
        <Route path="/NewProject" element={<NewProjectType />} />
      </Route>

      <Route element={<PersistentDrawerLeft />}>
        <Route path="/Workspace" element={<Workspace />} />
      </Route>
    </Routes>
  );
}

export default App;
