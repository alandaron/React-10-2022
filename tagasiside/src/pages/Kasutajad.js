import { useState } from "react";
import kasutajadFailist from "../users.json";

function Kasutajad() {
	const [kasutajad, uuendaKasutajad] = useState([...kasutajadFailist]);

	const laeKasutajad = () => {
		// Miks see kirjutab üle ka .json faili?
		// uuendaKasutajad(kasutajadFailist);
		uuendaKasutajad([...kasutajadFailist]);
	};

	const filtreeriKasutajanimi = () => {
		const filtreeritudKasutajad = kasutajad.filter(
			(kasutaja) => kasutaja.username.length >= 10
		);
		uuendaKasutajad(filtreeritudKasutajad);
	};

	const kustuta = (i) => {
		kasutajad.splice(i, 1);
		uuendaKasutajad([...kasutajad]);
	};

	const kasutajaIndex = () => {
		const tulemus = kasutajad.filter(
			(kasutaja) => kasutaja.email === "Lucio_Hettinger@annie.ca"
		);
		console.log(kasutajad.indexOf(tulemus[0]));
	};

	const kasutajaC = () => {
		const tulemus = kasutajad.filter((kasutaja) =>
			kasutaja.name.startsWith("C")
		);
		console.log(tulemus[0]);
	};

	const sorteeriLat = () => {
		kasutajad.sort((a, b) =>
			a.address.geo.lat.localeCompare(b.address.geo.lat)
		);
		uuendaKasutajad([...kasutajad]);
	};

	const positiivneLng = () => {
		const tulemus = kasutajad.filter(
			(kasutaja) => kasutaja.address.geo.lng > 0
		);
		uuendaKasutajad(tulemus);
	};

	const liidaID = () => {
		let tulemus = 0;
		kasutajad.forEach((kasutaja) => (tulemus += kasutaja.id));
		console.log(tulemus);
	};

	const lisaPhone = () => {
		const vastus = kasutajad.map((kasutaja) => {
			return { ...kasutaja, phone: "000-" + kasutaja.phone };
		});
		uuendaKasutajad(vastus);
	};

	const ainultEmailid = () => {
		let emailid = [];
		kasutajad.forEach((kasutaja) => emailid.push(kasutaja.email));
		console.log(emailid);
	};

	const catchphraseAsendus = () => {
		const vastus = kasutajad.map((kasutaja) => {
			return {
				...kasutaja,
				company: {
					...kasutaja.company,
					catchPhrase: kasutaja.company.catchPhrase.replaceAll("a", "e"),
				},
			};
		});

		uuendaKasutajad(vastus);
	};

	return (
		<div>
			<div>Kasutajaid kokku: {kasutajad.length}</div>
			<button onClick={laeKasutajad}>Lae kasutajad failist</button>
			<button onClick={filtreeriKasutajanimi}>
				Filtreeri kasutajanimi {">"} 10 tähte
			</button>
			<button onClick={kasutajaIndex}>
				Kasutaja INDEX Lucio_Hettinger@annie.ca
			</button>

			<button onClick={kasutajaC}>Kasutaja nimi algab tähega C</button>
			<button onClick={sorteeriLat}>Sorteeri lat väärtuse järgi</button>
			<button onClick={positiivneLng}>Positiivne LNG</button>
			<button onClick={liidaID}>Liida kasutaja ID-d</button>
			<button onClick={lisaPhone}>Lisa 000 phone</button>
			<button onClick={ainultEmailid}>Ainult e-mailid</button>
			<button onClick={catchphraseAsendus}>Catchphrase asendus</button>

			{kasutajad.map((kasutaja, i) => (
				<div key={kasutaja.id}>
					<div>{kasutaja.id}</div>
					<div>{kasutaja.name}</div>
					<div>{kasutaja.username}</div>
					<div>{kasutaja.email}</div>
					<div>{kasutaja.address.street}</div>
					<div>{kasutaja.address.suite}</div>
					<div>{kasutaja.address.city}</div>
					<div>{kasutaja.address.zipcode}</div>
					<div>{kasutaja.address.geo.lat}</div>
					<div>{kasutaja.address.geo.lng}</div>
					<div>{kasutaja.phone}</div>
					<div>{kasutaja.website}</div>
					<div>{kasutaja.company.name}</div>
					<div>{kasutaja.company.catchPhrase}</div>
					<div>{kasutaja.company.bs}</div>
					<button onClick={() => kustuta(i)}>x</button>
					<br />
				</div>
			))}
		</div>
	);
}

export default Kasutajad;
