import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClubsPage from "./pages/ClubsPage";
import EventPage from "./pages/EventPage";
import EventsDetailsPage from "./pages/EventDetailsPage"; 
import EventDescription from "./pages/EventDescription";
import RegisterationPage from "./pages/RegisterationPage"; // ✅ Import your Register page
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App bg-gray-950 min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/register" element={<RegisterationPage />} /> {/* ✅ Added */}
          <Route path="/events" element={<EventPage />} />
          <Route path="/events/:type" element={<EventsDetailsPage />} />
          <Route path="/events/:type/:id" element={<EventDescription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
