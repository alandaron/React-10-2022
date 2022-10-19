import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Meist from "./pages/Meist";
import Kontakt from "./pages/Kontakt";
import Seaded from "./pages/Seaded";
import { useState, useRef } from "react";

function App() {
	const [sisselogitud, muudaSisselogitud] = useState("ei");
	const [sonum, muudaSonum] = useState("");

	const kasutajanimiRef = useRef();
	const paroolRef = useRef();

	const logiSisse = () => {
		if (paroolRef.current.value === "123") {
			muudaSisselogitud("jah");
			muudaSonum(kasutajanimiRef.current.value + ", oled sisse logitud");
		} else {
			muudaSonum("Vale parool");
		}
	};

	const logiVälja = () => {
		muudaSisselogitud("ei");
		muudaSonum("");
	};

	return (
		<div className="App">
			<div>{sonum}</div>
			{sisselogitud === "ei" && (
				<div>
					<label>Kasutajanimi</label>
					<br />
					<input ref={kasutajanimiRef} type="text" />
					<br />
					<label>Parool</label>
					<br />
					<input ref={paroolRef} type="password" />
					<br />
					<button onClick={logiSisse}>Logi sisse</button>
				</div>
			)}
			{sisselogitud === "jah" && (
				<button onClick={logiVälja}>Logi välja</button>
			)}
			<br />
			<Link to="/">
				<button>Avaleht</button>
			</Link>
			<Link to="/meist">
				<button>Meist</button>
			</Link>
			<Link to="/kontakt">
				<button>Kontakt</button>
			</Link>
			<Link to="/seaded">
				<button>Seaded</button>
			</Link>

			<Routes>
				<Route path="" element={<Avaleht />} />
				<Route path="meist" element={<Meist />} />
				<Route path="kontakt" element={<Kontakt />} />
				<Route path="seaded" element={<Seaded />} />
			</Routes>
		</div>
	);
}

export default App;
