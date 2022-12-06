import Login from "./components/Login";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true;

  return (
    <BrowserRouter>
      <NavbarComponent user={user}/>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
