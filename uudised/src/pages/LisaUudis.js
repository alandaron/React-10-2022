import { useRef, useState } from "react";

function LisaUudis() {
	const uudisRef = useRef();
	const [message, setMessage] = useState("");

	const lisaUudis = () => {
		const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
		uudised.push(uudisRef.current.value);
		localStorage.setItem("uudised", JSON.stringify(uudised));
	};

	const check = () => {
		setMessage("");

		if (
			uudisRef.current.value.charAt(0) ===
			uudisRef.current.value.charAt(0).toLowerCase()
		) {
			setMessage("Uudis peab algama suure algustähega!");
		}

		if (uudisRef.current.value.includes("  ")) {
			setMessage("Sisestasid kaks tühikut, paranda!");
		}
	};

	return (
		<div>
			<div>{message}</div>
			<label>Uudise nimi: </label>
			<input onChange={check} ref={uudisRef} type="text" />
			<button onClick={lisaUudis}>Lisa uudis</button>
		</div>
	);
}

export default LisaUudis;
