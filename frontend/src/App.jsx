import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Leaderboard from "./pages/Leaderboard"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user/:userType"  element={<Login/>} />
          <Route path="/:userName" element={<Profile/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App