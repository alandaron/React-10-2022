import { useRef, useState } from "react";
import poedFailist from "../poed.json";

function Poed() {
	const [poed, uuendaPoed] = useState(poedFailist);

	const poeNimiRef = useRef();

	const lisaPood = () => {
		uuendaPoed([...poed, poeNimiRef.current.value]);
	};

	const sorteeriAZ = () => {
		poed.sort();
		uuendaPoed([...poed]);
	};

	const sorteeriZA = () => {
		poed.sort();
		poed.reverse();
		uuendaPoed([...poed]);
	};

	const filtreeri = () => {
		const filtreeritudPoed = poed.filter((pood) => pood.includes("mäe"));
		uuendaPoed(filtreeritudPoed);
	};

	const kustuta = (number) => {
		poed.splice(number, 1); // kustutamine esimene on mitmendat kustutan, teine on mitu tk
		uuendaPoed([...poed]);
	};

	const muudaSuureks = () => {
		const vastus = poed.map((pood) => pood.toUpperCase());
		uuendaPoed(vastus);
	};

	return (
		<div>
			<button onClick={sorteeriAZ}>Sorteeri AZ</button>
			<button onClick={sorteeriZA}>Sorteeri ZA</button>
			<button onClick={filtreeri}>Filtreeri</button>
			<button onClick={muudaSuureks}>Muuda igaüht</button>
			{poed.map((pood, j2rjekorraNumber) => (
				<div key={j2rjekorraNumber}>
					<span>{pood}</span>
					<button onClick={() => kustuta(j2rjekorraNumber)}>X</button>
				</div>
			))}
			<br />

			<label>Uue poe nimi</label>
			<br />
			<input ref={poeNimiRef} type="text" />
			<button onClick={lisaPood}>Lisa</button>
			<br />
			<br />
			{["Saab", "Volvo", "BMW"].map((auto, i) => (
				<div key={i}>{auto}</div>
			))}
		</div>
	);
}

export default Poed;
