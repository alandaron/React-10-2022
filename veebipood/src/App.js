import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Ostukorv from "./pages/Ostukorv";

function App() {
	return (
		<div className="App">
			<div className="header">
				<img
					className="pilt"
					src="https://imagizer.imageshack.com/v2/942x1257q90/r/924/Slpsqh.png"
					alt="Audi RS6 C7 Carbon Kit"
				/>
			</div>
			<hr />
			<Link to="/">
				<button className="nupp">Avaleht</button>
			</Link>
			<Link to="/lisa-toode">
				<button className="nupp">Lisa toode</button>
			</Link>
			<Link to="/ostukorv">
				<button className="nupp">Ostukorv</button>
			</Link>

			<Routes>
				<Route path="" element={<Avaleht />} />
				<Route path="lisa-toode" element={<LisaToode />} />
				<Route path="ostukorv" element={<Ostukorv />} />
			</Routes>
		</div>
	);
}

export default App;
