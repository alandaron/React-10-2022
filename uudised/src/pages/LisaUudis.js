import { useRef } from "react";

function LisaUudis() {
	const uudisRef = useRef();

	const lisaUudis = () => {
		const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
		uudised.push(uudisRef.current.value);
		localStorage.setItem("uudised", JSON.stringify(uudised));
	};

	return (
		<div>
			<label>Uudise nimi: </label>
			<input ref={uudisRef} type="text" />
			<button onClick={lisaUudis}>Lisa uudis</button>
		</div>
	);
}

export default LisaUudis;
