import Navbar from "./components/layout/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext.jsx";
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
import EditProfileVol from "./pages/volunteer/profile/EditProfileVol.jsx";
import RegisterConfirm from "./pages/auth/RegisterConfirm.jsx";
import Home from "./pages/home/Home.jsx";
import Notification from "./pages/notifications/Notification.jsx";
import DashboardFnd from "./pages/foundation/DashboardFnd.jsx";
import InscriptionsVol from "./pages/volunteer/activities/InscriptionsVol.jsx";
import ActivityManager from "./pages/foundation/activities/ActivityManager.jsx";
import BottomNavbar from "./components/layout/BottomNavbar.jsx";
import ActivityDetailFnd from "./pages/foundation/activities/ActivityDetailFnd.jsx";
import VolunteerViewFnd from "./pages/foundation/activities/VolunteerViewFnd.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/register/foundation" element={<RegisterFnd />} />
          <Route path="/register" element={<RegisterVol />} />

          <Route path="/register/confirm" element={<RegisterConfirm />} />

          {/* fundacion */}
          <Route path="/profile" element={<FoundationProfile />} />
          <Route path="/profile/edit" element={<EditProfileFnd />} />
          <Route path="/edit/info" element={<EditInfoFnd />} />

          <Route path="/dashboard" element={<DashboardFnd />} />
          <Route path="/activity/create" element={<ActivityManager />} />
          <Route path="/activity/:id" element={<ActivityManager />} />
          <Route path="/activity/detail/:id" element={<ActivityDetailFnd />} />
          <Route path="/fundacion/voluntario-perfil"  element={<VolunteerViewFnd/>}/>

          {/* voluntariado */}
          <Route path="/explore" element={<ActivitiesVol />} />
          <Route
            path="/volunteer/activities/:id"
            element={<ActivitiesDetailVol />}
          />
          <Route path="/inscriptions" element={<InscriptionsVol />} />
          <Route path="/foundation/:id" element={<FoundationView />} />
          <Route path="/volunteer/profile" element={<VolunteerProfile />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/volunteer/profile/data" element={<EditDataVol />} />
          <Route path="/volunteer/profile/edit" element={<EditProfileVol />} />
        </Routes>
        <BottomNavbar />
      </Router>
    </AuthProvider>
  );
}

export default App;

