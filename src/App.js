import "./App.css";
import AppLayout from "./layouts/Applayout";
import HomePage from "./routes/HomePage";
import LandingPage from "./routes/Landing";
import SignUpPage from "./routes/SignUp";
import SignInPage from "./routes/SignIn";
import PlayPage from "./routes/PlayPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <AppLayout>
          <Routes>
            <Route path="/" Component={LandingPage}></Route>
            <Route path="/home" Component={HomePage}></Route>
            <Route path="/signup" Component={SignUpPage}></Route>
            <Route path="/signin" Component={SignInPage}></Route>
            <Route path="/play" Component={PlayPage}></Route>
          </Routes>
        </AppLayout>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
