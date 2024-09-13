import logo from "./logo.svg";
import "./App.css";
import Register from "./Register";
import Badge from "./Badge";
import Profile from "./Profile";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  <Router>
    <div className="App">
      <Routes>
        {/* Form Route */}
        <Route path="/" element={<Register />} />

        {/* Dynamic Profile Route */}
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  </Router>;
  return <Register></Register>;
}

export default App;
