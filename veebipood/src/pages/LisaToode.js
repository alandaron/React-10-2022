import { useRef, useState } from "react";

function LisaToode() {
	const [sonum, uuendaSonum] = useState("");
	const nimiRef = useRef();

	const lisa = () => {
		if (nimiRef.current.value.trim() === "") {
			uuendaSonum("Sa ei saa tühja nimega toodet sisestada!");
			nimiRef.current.value = "";
		} else {
			uuendaSonum("Uus toode lisatud: " + nimiRef.current.value);
			let tootedLS = localStorage.getItem("tooted");
			tootedLS = JSON.parse(tootedLS) || [];
			tootedLS.push(nimiRef.current.value);
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
			<button onClick={lisa}>Sisesta</button>
		</div>
	);
}

export default LisaToode;
