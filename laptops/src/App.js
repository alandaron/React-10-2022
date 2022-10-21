import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import LisaArvuti from "./pages/LisaArvuti";
import VaataArvuteid from "./pages/VaataArvuteid";

function App() {
	return (
		<div className="App">
			<Link to="/">
				<button>Avaleht</button>
			</Link>
			<Link to="/all">
				<button>Vaata sülearvuteid</button>
			</Link>
			<Link to="/add">
				<button>Lisa sülearvuti</button>
			</Link>
			<Routes>
				<Route path="" element={<Avaleht />} />
				<Route path="all" element={<VaataArvuteid />} />
				<Route path="add" element={<LisaArvuti />} />
			</Routes>
		</div>
	);
}

export default App;
