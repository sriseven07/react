import { BrowserRouter, Routes,  Route } from "react-router-dom";
// import component
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

// import pages
import Activity from "./pages/Activity";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
