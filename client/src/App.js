import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/utils/NavBar";
import MainPage from "./page/MainPage";

function App() {
  return (
    <BrowserRouter className="App">
    <NavBar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
