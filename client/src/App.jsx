import Navbar from "./components/layout/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/authContext.jsx';
import HomePage from "./pages/home/HomePage.jsx";
import FoundationRegisterPage from "./pages/auth/FoundationRegisterPage.jsx";
import VolunteerRegisterPage from "./pages/auth/VolunteerRegisterPage.jsx";
import FoundationProfile from "./pages/profile/FoundationProfile.jsx";
import Activities from "./pages/volunteering/Activities.jsx";

function App() {
  return (
    <AuthProvider>
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
          <Route path="/volunteering" element={<Activities/>} />
        </Routes>
      </Router>
    </AuthProvider>

  );
}

export default App;

