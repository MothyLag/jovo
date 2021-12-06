import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthComponent } from "./components/AuthComponent/AuthComponent";
import { Invitation } from "./pages/Invitation/Invitation";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:userToken" element={<AuthComponent />} />
        <Route path="/" element={<AuthComponent />} />
        <Route path="/invitation" element={<Invitation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
