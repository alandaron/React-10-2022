import { useRef, useState } from "react";

function LisaToode() {
	const [sonum, uuendaSonum] = useState("");
	const nimiRef = useRef();
	const hindRef = useRef();
	const piltRef = useRef();
	const aktiivneRef = useRef();

	const lisa = () => {
		if (nimiRef.current.value.trim() === "") {
			uuendaSonum("Sa ei saa tühja nimega toodet sisestada!");
			nimiRef.current.value = "";
		} else {
			uuendaSonum("Uus toode lisatud: " + nimiRef.current.value);
			let tootedLS = localStorage.getItem("tooted");
			tootedLS = JSON.parse(tootedLS) || [];

			const uusToode = {
				nimi: nimiRef.current.value,
				hind: Number(hindRef.current.value),
				pilt: piltRef.current.value,
				aktiivne: aktiivneRef.current.checked,
			};
			tootedLS.push(uusToode);

			tootedLS = JSON.stringify(tootedLS);
			localStorage.setItem("tooted", tootedLS);
			nimiRef.current.value = "";
		}
	};

	return (
		<div>
			<h1>Lisa uus toode</h1>
			<div>{sonum}</div>
			<label>Toote nimi </label>
			<input ref={nimiRef} type="text" />
			<br />
			<label>Toote hind </label>
			<input ref={hindRef} type="number" />
			<br />
			<label>Toote pilt </label>
			<input ref={piltRef} type="text" />
			<br />
			<label>Toode aktiivne </label>
			<input ref={aktiivneRef} type="checkbox" />
			<br />
			<button onClick={lisa}>Sisesta</button>
		</div>
	);
}

export default LisaToode;
