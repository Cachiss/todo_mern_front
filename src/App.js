import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./hooks/AuthProvider";
import { ProfileProvider } from "./hooks/ProfileProvider";
//components
import Navbar from "./components/Navbar";
import Prueba from "./pages/Prueba";
import HomePage from "./pages/Home";
import GetUsers from "./pages/getUsers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AuthProvider>
        <ProfileProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/test" element={<Prueba />} />
              <Route path="/users" element={<GetUsers />} />
              <Route path="*" element={<>404</>} />
            </Routes>
          </Router>
        </ProfileProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
