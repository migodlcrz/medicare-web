import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import Sidebar from "./components/SideBar";
import PatientPage from "./pages/PatientPage";
import AppointmentPage from "./pages/AppointmentPage";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={!user ? <LoginPage /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={
            user ? (
              <Layout>
                <DashboardPage />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/patients"
          element={
            user ? (
              <Layout>
                <PatientPage />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/appointments"
          element={
            user ? (
              <Layout>
                <AppointmentPage />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <main className="flex flex-col w-5/6">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default App;
