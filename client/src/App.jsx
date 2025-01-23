import Navbar from "./components/layout/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import FoundationRegisterPage from "./pages/auth/FoundationRegisterPage.jsx";
import VolunteerRegisterPage from "./pages/auth/VolunteerRegisterPage.jsx";
import FoundationProfile from "./pages/profile/FoundationProfile.jsx";
import EditFoundationInfo from "./pages/profile/EditFoundationInfo.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/foundation/register"
          element={<FoundationRegisterPage />}
        />
        <Route path="/register" element={<VolunteerRegisterPage />} />
        <Route path="/profile" element={<FoundationProfile />} />
        <Route path="/edit/info" element={<EditFoundationInfo />} />
      </Routes>
    </Router>
  );
}

export default App;

