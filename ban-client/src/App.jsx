// Components
import Footer from "./components/Footer";
import Header from "./components/Header";

// Views
import Artist from "./views/Artist";
import Dashboard from "./views/Dashboard";
import Events from "./views/Events";
import Home from "./views/Home";
import Landing from "./views/Landing";
import NotFound from "./views/NotFound";
import Rosters from "./views/Rosters";

// React router dom
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="tracking-wider ">
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/rosters" element={<Rosters />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/artists/:artistName" element={<Artist />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
