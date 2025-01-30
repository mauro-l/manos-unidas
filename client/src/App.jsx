import Navbar from "./components/layout/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import RegisterFnd from "./pages/auth/RegisterFnd.jsx";
import ActivitiesVol from "./pages/volunteer/activities/ActivitiesVol.jsx";
import ActivitiesDetailVol from "./pages/volunteer/activities/ActivitiesDetailVol.jsx";
import RegisterVol from "./pages/auth/RegisterVol.jsx";
import FoundationProfile from "./pages/foundation/profile/FoundationProfile.jsx";
import EditInfoFnd from "./pages/foundation/profile/EditInfoFnd.jsx";
import EditProfileFnd from "./pages/foundation/profile/EditProfileFnd.jsx";
import FoundationView from "./pages/volunteer/activities/FoundationView.jsx";
import VolunteerProfile from "./pages/volunteer/profile/VolunteerProfile.jsx";
import EditDataVol from "./pages/volunteer/profile/EditDataVol.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register/foundation" element={<RegisterFnd />} />
          <Route path="/register" element={<RegisterVol />} />
          {/* fundacion */}
          <Route path="/profile" element={<FoundationProfile />} />
          <Route path="/profile/edit" element={<EditProfileFnd />} />
          <Route path="/edit/info" element={<EditInfoFnd />} />
          {/* voluntariado */}
          <Route path="/volunteer" element={<ActivitiesVol />} />
          <Route
            path="/volunteer/activities/:id"
            element={<ActivitiesDetailVol />}
          />
          <Route path="/foundation/:id" element={<FoundationView />} />
          <Route path="/profileVol" element={<VolunteerProfile />} />
          <Route
            path="/volunteer/profile/edit"
            element={<VolunteerProfile />}
          />
          <Route path="/volunteer/profile/data" element={<EditDataVol />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

