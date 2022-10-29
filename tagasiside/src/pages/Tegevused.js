import tegevusedFailist from "../tegevused.json";
import { useState } from "react";
function Tegevused() {
	const [tegevused, uuendaTegevused] = useState(tegevusedFailist);

	const kuvaKasutajaTegevused = (id) => {
		const tulemus = tegevused.filter((tegevus) => tegevus.userId === id);
		uuendaTegevused(tulemus);
	};

	const resetTegevused = () => {
		uuendaTegevused(tegevusedFailist);
	};

	const valmisTegevused = () => {
		const tulemus = tegevused.filter((tegevus) => tegevus.completed === true);
		uuendaTegevused(tulemus);
	};

	const mittevalmisTegevused = () => {
		const tulemus = tegevused.filter((tegevus) => tegevus.completed === false);
		uuendaTegevused(tulemus);
	};

	const algavadT = () => {
		const tulemus = tegevused.filter((tegevus) =>
			tegevus.title.startsWith("t")
		);
		uuendaTegevused(tulemus);
	};

	const rohkemKui20 = () => {
		const tulemus = tegevused.filter((tegevus) => tegevus.title.length > 20);
		uuendaTegevused(tulemus);
	};

	return (
		<div>
			<div>Tegevusi kokku: {tegevused.length}</div>
			<button onClick={() => kuvaKasutajaTegevused(1)}>
				Kuva kõik kasutaja ID 1 tegevused
			</button>
			<button onClick={() => kuvaKasutajaTegevused(2)}>
				Kuva kõik kasutaja ID 2 tegevused
			</button>
			<button onClick={() => kuvaKasutajaTegevused(3)}>
				Kuva kõik kasutaja ID 3 tegevused
			</button>
			<button onClick={valmisTegevused}>Kuva kõik valmis tegevused</button>
			<button onClick={mittevalmisTegevused}>
				Kuva kõik mittevalmis tegevused
			</button>
			<button onClick={algavadT}>Kuva kõik 't' tähega algavad tegevused</button>
			<button onClick={rohkemKui20}>
				Kuva tegevused, millel on tähemärke rohkem kui 20
			</button>
			<button onClick={resetTegevused}>Kuva kõik tegevused tagasi</button>

			{tegevused.map((tegevus) => (
				<div>
					<div>{tegevus.userId}</div>
					<div>{tegevus.id}</div>
					<div>{tegevus.title}</div>
					<div>{tegevus.completed}</div>
				</div>
			))}
		</div>
	);
}

export default Tegevused;
