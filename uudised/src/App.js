import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import Kontakt from "./pages/Kontakt";
import LisaUudis from "./pages/LisaUudis";
import Meist from "./pages/Meist";
import Uudised from "./pages/Uudised";

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
			</div>
			<Routes>
				<Route path="" element={<Avaleht />} />
				<Route path="uudised" element={<Uudised />} />
				<Route path="kontakt" element={<Kontakt />} />
				<Route path="meist" element={<Meist />} />
				<Route path="lisa-uudis" element={<LisaUudis />} />
			</Routes>
		</div>
	);
}

export default App;
