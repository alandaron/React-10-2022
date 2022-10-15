import { useRef, useState } from "react";

function LisaTegelane() {
	const [sonum, uusSonum] = useState("");
	const nimiRef = useRef();

	const lisa = () => {
		if (nimiRef.current.value.trim() === "") {
			uusSonum("Tühja nimega ei saa sisestada");
		} else {
			uusSonum("Tegelane lisatud");
		}
	};
	return (
		<div>
			<div>{sonum}</div>
			<label htmlFor="sonum">Tegelase nimi</label>
			<br />
			<input ref={nimiRef} type="text" id="sonum" />
			<br />
			<button onClick={lisa}>Lisa uus</button>
		</div>
	);
}

export default LisaTegelane;
