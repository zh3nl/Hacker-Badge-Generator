import logo from "./logo.svg";
import "./App.css";
import Register from "./Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  return <Register></Register>;
}

export default App;
