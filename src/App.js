import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kontakt from "./pages/Kontakt";
import Domov from "./pages/Domov";
import Ponuka from "./pages/Ponuka";
import Onas from "./pages/Onas";
import Pozicovna from "./pages/Pozicovna";
import A8 from "./pages/A8";
import Q3 from "./pages/Q3";
import Q2 from "./pages/Q2";
import A3sp from "./pages/A3sp";
import A3l from "./pages/A3l";
import A62 from "./pages/A62";
import A63 from "./pages/A63";
import S7 from "./pages/S7";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Domov />} />
        <Route path="/ponuka" element={<Ponuka />} />
        <Route path="/o-nas" element={<Onas />} />
        <Route path="/pozicovna" element={<Pozicovna />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/a8" element={<A8 />} />
        <Route path="/q3" element={<Q3 />} />
        <Route path="/q2" element={<Q2 />} />
        <Route path="/a3sp" element={<A3sp />} />
        <Route path="/a3l" element={<A3l />} />
        <Route path="/a62" element={<A62 />} />
        <Route path="/a63" element={<A63 />} />
        <Route path="/s7" element={<S7 />} />
      </Routes>
    </Router>
  );
}

export default App;
