import { useState } from "react";

function Ostukorv() {
	const [ostukorv, uuendaOstukorv] = useState(
		JSON.parse(localStorage.getItem("ostukorv")) || []
	);

	const kustuta = (i) => {
		ostukorv.splice(i, 1);
		uuendaOstukorv([...ostukorv]);
		localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
	};

	const lisa = (toode) => {
		ostukorv.push(toode);
		uuendaOstukorv([...ostukorv]);
		localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
	};

	const tyhjenda = () => {
		uuendaOstukorv([]);
		localStorage.setItem("ostukorv", JSON.stringify([]));
	};

	return (
		<div>
			{ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
			{ostukorv.length > 0 && <div>{ostukorv.length} tk</div>}
			{ostukorv.length === 0 && <div>Ostukorv on tühi</div>}

			{ostukorv.map((toode, i) => (
				<div key={i}>
					{toode}
					<button onClick={() => kustuta(i)}>x</button>
					<button onClick={() => lisa(toode)}>+</button>
				</div>
			))}
		</div>
	);
}

export default Ostukorv;
