import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CollersPage, QuizPage, LandingPage } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/collers" element={<CollersPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App;
