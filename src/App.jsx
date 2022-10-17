import { Global } from "./styles/GlobalStyles";
import { Header } from "./pages/partials/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div>
      <Global />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
