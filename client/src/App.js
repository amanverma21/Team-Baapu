import React from "react";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from "./components/Signup";
// import Login from "./components/Login";

import "./App.css";
// import StockData from "./components/stockData";
// import StockNavbar from "./components/stockNavbar";


function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading && (
        <div className="spinner-parent">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            // <ProtectedRoute>
              <Home />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App