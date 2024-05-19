/* eslint-disable no-unused-vars */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PropertySubmission from "./components/Property-submission/PropertySubmission";
import DashBoradSliderBar from "./components/dashBorad/DashBoradSliderBar";
import SingUp from "./components/Registration/SingUp";
import LogIn from "./components/Registration/LogIn";
import Google from "./components/google";
import UpdateProperty from "./components/Property-submission/UpdateProperty";
import GetAllProperty from "./components/dashBorad/GetAllProperty";
import LeadContact from "./components/leadPages/LeadContact";
import EditProperty from "./components/Property-submission/EditProperty";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashBoradSliderBar />} />
          <Route path="/submit" element={<PropertySubmission />} />
          <Route path="/" element={<SingUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/previewPage" element={<PropertySubmission />} />
          <Route path="/myProprties" element={<GetAllProperty />} />
          <Route path="/update/:id" element={<EditProperty />} />
          <Route path="/leadsPage" element={<LeadContact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
