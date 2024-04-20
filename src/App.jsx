import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FindDoctor from "./pages/FindDoctor";
import DoctorProfile from "./pages/DoctorProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route index element={<FindDoctor />} />
        <Route path="/doctorprofile" element={<DoctorProfile />} />
        <Route path="*" element={"Page not found"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
