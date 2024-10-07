import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./components/store/store"; // Import your Redux store

// Import pages
import Home from "./pages/Shared/Home";
import Services from "./pages/Shared/Services";
import ServiceList from "./pages/Shared/ServiceList"; // Import ServiceList page
import ServiceSearch from "./pages/Shared/ServiceSearch"; // Import ServiceSearch page
import Login from "./pages/Shared/Login";
import Register from "./pages/Shared/Register";
import Tutorials from "./pages/Shared/Tutorials";
import NotFound from "./pages/Shared/NotFound";
import Target from "./pages/Shared/Target";
import Price from "./pages/Shared/Price";
import Booking from "./pages/Shared/Booking"; // Import the new Booking page
import BookingDetails from "./pages/Shared/BookingDetails";

// Import layouts
import HomeLayout from "./layout/HomeLayout";
import UserLayout from "./layout/UserLayout";
import AdminLayout from "./layout/AdminLayout";

// Import user pages
import UserDashboard from "./pages/User/UserDashboard";
import UserUsers from "./pages/User/UserUsers"; // Import UserUsers page

// Import admin pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminUsers from "./pages/Admin/AdminUsers";

const App = () => {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap your app with Provider */}
      <BrowserRouter>
        <Routes>
          {/* Routes under HomeLayout */}
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="target" element={<Target />} />
            <Route path="services" element={<Services />} />
            <Route path="services/list" element={<ServiceList />} />{" "}
            {/* Service List route */}
            <Route path="services/search" element={<ServiceSearch />} />{" "}
            {/* Service Search route */}
            <Route path="price" element={<Price />} />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="booking/:service" element={<Booking />} />{" "}
            {/* New route for booking */}
            <Route path="booking-details" element={<BookingDetails />} />
          </Route>

          {/* Routes under UserLayout */}
          <Route path="/user" element={<UserLayout />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="users" element={<UserUsers />} />
          </Route>

          {/* Routes under AdminLayout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>

          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
