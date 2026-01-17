import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  Doctor,
  Services,
  About,
  Contact,
  Testimonial,
  Apps,
  Dashboard,
  Product,
  Profile,
  Login,
  Register,
  Settings,
  Users,
  ForgotPassword,
} from "./pages/index";
import Layout from "./layout/Layout";
import AuthLayout from "./authlayout/AuthLayout";
import { NotFound } from "./components/index";
import ProtectedRoute from "./utils/ProtectedRoute";
import DashboardHome from "./pages/dashboard/Home/DashboardHome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/product" element={<Product />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
