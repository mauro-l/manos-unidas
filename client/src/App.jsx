import { AuthProvider } from "./contexts/authContext.jsx";

import Navigation from "./routes/Navigation.jsx";

function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;

