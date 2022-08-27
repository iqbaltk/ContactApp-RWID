import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

//views
import ContactApps from "./views/ContactApps";
import DetailContact from "./views/DetailContact";
import CategoryContact from "./views/CategoryContact";
import NotFound from "./views/NotFound";

//components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ContactApps />} />
        <Route exact path="/category/:category" element={<CategoryContact />} />
        <Route exact path="/detail/:id" element={<DetailContact />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
