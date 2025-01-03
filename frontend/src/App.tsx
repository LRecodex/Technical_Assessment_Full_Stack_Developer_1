import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import AddItemPage from "./pages/AddItemPage";
import EditItemPage from "./pages/EditItemPage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Router>
            <Navbar />
            <main style={{ flex: 1, backgroundColor: "#f8f9fa", padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add" element={<AddItemPage />} />
                    <Route path="/edit/:id" element={<EditItemPage />} />
                </Routes>
            </main>
        </Router>
    </div>
);

export default App;
