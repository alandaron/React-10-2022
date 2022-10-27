import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import HaldaUudiseid from "./pages/HaldaUudiseid";
import Kontakt from "./pages/Kontakt";
import LisaUudis from "./pages/LisaUudis";
import Meist from "./pages/Meist";
import MuudaUudis from "./pages/MuudaUudis";
import Uudised from "./pages/Uudised";
import YksUudis from "./pages/YksUudis";

function App() {
	return (
		<div className="app">
			<div className="lingid">
				<Link to="/">
					<button>Avaleht</button>
				</Link>
				<Link to="/uudised">
					<button>Uudised</button>
				</Link>
				<Link to="/kontakt">
					<button>Kontakt</button>
				</Link>
				<Link to="/meist">
					<button>Meist</button>
				</Link>
				<Link to="/lisa-uudis">
					<button>Lisa uudis</button>
				</Link>
				<Link to="/halda-uudiseid">
					<button>Halda uudiseid</button>
				</Link>
			</div>
			<Routes>
				<Route path="" element={<Avaleht />} />
				<Route path="uudised" element={<Uudised />} />
				<Route path="kontakt" element={<Kontakt />} />
				<Route path="meist" element={<Meist />} />
				<Route path="lisa-uudis" element={<LisaUudis />} />
				<Route path="halda-uudiseid" element={<HaldaUudiseid />} />
				<Route path="uudis/:id" element={<YksUudis />} />
				<Route path="muuda/:id" element={<MuudaUudis />} />
			</Routes>
		</div>
	);
}

export default App;
