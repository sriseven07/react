import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Menu />
      </BrowserRouter>
    </div>
  );
}

export default App;
