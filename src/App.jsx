import GameDisplay from "./Components/GameDisplay";
import InputForm from "./Components/InputForm";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SingleGame from "./Components/SingleGame";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GameDisplay" element={<GameDisplay />} />
          <Route path="/InputForm" element={<InputForm />} />
          <Route path="/SingleGame/:id" element={<SingleGame />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
