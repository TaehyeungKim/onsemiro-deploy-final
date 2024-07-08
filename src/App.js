import "./App.css";
import AppLayout from "./layouts/Applayout";
import HomePage from "./routes/HomePage";
import LandingPage from "./routes/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" Component={LandingPage}></Route>
          <Route path="/home" Component={HomePage}></Route>
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
