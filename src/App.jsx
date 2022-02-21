import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Serach } from "./components/Serach";
import { UserWeb } from "./components/userWeb";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Serach />} />
          <Route path="/user/Websites" element={<UserWeb />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
