import { useRef, useState } from "react";
import nimedFailist from "../nimed.json";

function TagasideAndja() {
	const [nimed, uuendaNimed] = useState(nimedFailist);
	const uusNimiRef = useRef();

	const lisaUusNimi = () => {
		if (uusNimiRef.current.value.trim() === "") return;
		nimed.push(uusNimiRef.current.value);
		uuendaNimed([...nimed]);
	};
	const filtreeriNimed = (kuidas) => {
		if (kuidas === "algavad") {
			const vastus = nimed.filter((nimi) => nimi.startsWith("M"));
			uuendaNimed(vastus);
		} else if (kuidas === "6-kohalised") {
			const vastus = nimed.filter(
				(nimi) => nimi.length === 6 && nimi.endsWith("y")
			);
			uuendaNimed(vastus);
		} else if (kuidas === "lõpevad") {
			const vastus = nimed.filter((nimi) => nimi.endsWith("y"));
			uuendaNimed(vastus);
		}
	};

	const lisaEST = () => {
		const vastus = nimed.map((nimi) => "EST-" + nimi);
		uuendaNimed(vastus);
	};

	const sorteeriNimed = () => {
		nimed.sort();
		nimed.reverse();
		uuendaNimed([...nimed]);
	};

	const kustuta = (i) => {
		nimed.splice(i, 1);
		uuendaNimed([...nimed]);
	};

	return (
		<div>
			<div>{nimed.length} tk</div>
			<div>Paul: {nimed.find((nimi) => nimi === "Paul").length}</div>
			<label>Lisa uus nimi:</label>
			<input ref={uusNimiRef} type="text" />
			<button onClick={lisaUusNimi}>Lisa</button>
			<br />
			<button onClick={() => filtreeriNimed("algavad")}>
				Filtreeri nimed (algavad M-tähega)
			</button>
			<button onClick={() => filtreeriNimed("6-kohalised")}>
				Filtreeri nimed (6 kohalised nimed)
			</button>
			<button onClick={() => filtreeriNimed("lõpevad")}>
				Filtreeri nimed (lõpevad y tähega)
			</button>
			<button onClick={sorteeriNimed}>Sorteeri nimed Z-A</button>
			<button onClick={lisaEST}>Lisa EST</button>
			<hr />
			{nimed.map((nimi, i) => (
				<div key={i}>
					{nimi} <button onClick={() => kustuta(i)}>x</button>
				</div>
			))}
		</div>
	);
}

export default TagasideAndja;
