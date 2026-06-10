import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
