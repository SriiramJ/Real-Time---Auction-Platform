import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetNewPassword from "./pages/auth/ResetNewPassword";
import UploadItem from "./pages/UploadItem";
import Dashboard from "./pages/Dashboard";
import SingleAuctionDetail from "./pages/SingleAuctionDetail";
import UserProfile from "./pages/UserProfile";
import EditAuction from "./pages/EditAuction";
import Protected, { PublicRoute, SellerRoutes } from "./auth/Protected";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/single-auction-detail/:id"
            element={<SingleAuctionDetail />}
          />

          <Route path="*" element={<h1 className="text-white">Not Found</h1>} />

          <Route element={<PublicRoute />}>
            <Route
              path="/reset-password/:id/:token"
              element={<ResetNewPassword />}
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<Protected />}>
            <Route path="/user-profile/*" element={<UserProfile />} />
            <Route path="/edit-auction/:id" element={<EditAuction />} />
            <Route element={<SellerRoutes />}>
              <Route path="/create-auction" element={<UploadItem />} />
            </Route>
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
