import { useState } from "react";
function ValitudTegelased() {
	const [tegelased, uuendaTegelased] = useState(
		JSON.parse(localStorage.getItem("valitud_tegelased")) || []
	);

	const eemalda = (i) => {
		tegelased.splice(i, 1);
		localStorage.setItem("valitud_tegelased", JSON.stringify(tegelased));
		uuendaTegelased([...tegelased]);
	};

	const eemaldaTegelased = () => {
		localStorage.setItem("valitud_tegelased", JSON.stringify([]));
		uuendaTegelased([]);
	};

	return (
		<div>
			{tegelased.length > 0 ? (
				<div>
					<button onClick={eemaldaTegelased}>Eemalda kõik tegelased</button>
					<div>Valitud on {tegelased.length} tegelast:</div>
				</div>
			) : (
				<div>Ühtegi tegelast pole valitud</div>
			)}
			{tegelased.map((tegelane, i) => (
				<div key={i}>
					<div>{tegelane.eesnimi}</div>
					<div>{tegelane.perenimi}</div>
					<div>{tegelane.vanus}</div>
					<div>{tegelane.elukoht}</div>
					<button onClick={() => eemalda(i)}>Eemalda</button>
					<br />
					<br />
				</div>
			))}
		</div>
	);
}

export default ValitudTegelased;
