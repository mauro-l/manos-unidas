import Navbar from "./components/layout/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import FoundationRegisterPage from "./pages/auth/FoundationRegisterPage.jsx";
import VolunteerRegisterPage from "./pages/auth/VolunteerRegisterPage.jsx";
import FoundationProfile from "./pages/profile/FoundationProfile.jsx";
import EditFoundInfoPage from "./pages/profile/EditFoundInfoPage.jsx";
import Activities from "./pages/volunteering/Activities.jsx";
import ActivitiesDetail from "./components/features/activities/ActivitiesDetail.jsx";
import EditFoundProfilePage from "./pages/profile/EditFoundProfilePage.jsx";
import FoundationDetail from "./pages/volunteering/foundationDetail.jsx";


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
          <Route path="/profile/edit" element={<EditFoundProfilePage />} />
          <Route path="/volunteering" element={<Activities />} />
          <Route path="/edit/info" element={<EditFoundInfoPage />} />
          <Route path="/volunteering/activities/:id" element={<ActivitiesDetail />} />
          <Route path="/foundation/:id" element={<FoundationDetail />} />
         </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
