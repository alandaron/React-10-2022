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

	const arvutaKogusumma = () => {
		let kogusumma = 0;
		ostukorv.forEach((element) => {
			kogusumma = kogusumma + element.hind;
		});
		return kogusumma.toFixed(2);
	};

	return (
		<div>
			{ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
			{ostukorv.length > 0 && <div>{ostukorv.length} tk</div>}
			{ostukorv.length === 0 && <div>Ostukorv on tühi</div>}

			{ostukorv.map((toode, i) => (
				<div key={i}>
					<img width={100} src={toode.pilt} alt="pilt"></img>
					<div>{toode.nimi}</div>
					<div>{toode.hind} €</div>
					<button onClick={() => kustuta(i)}>x</button>
					<button onClick={() => lisa(toode)}>+</button>
				</div>
			))}

			<div>Kokku: {arvutaKogusumma()} €</div>
		</div>
	);
}

export default Ostukorv;
