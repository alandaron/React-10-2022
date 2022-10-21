import { useState, useRef } from "react";

function LisaArvuti() {
	const [message, setMessage] = useState("Lisa arvuti");
	const markRef = useRef();
	const mudelRef = useRef();
	const maksumusRef = useRef();

	const addProduct = () => {
		setMessage("Arvuti lisatud!");

		let margid = localStorage.getItem("margid");
		margid = JSON.parse(margid) || [];
		margid.push(markRef.current.value);
		margid = JSON.stringify(margid);
		localStorage.setItem("margid", margid);

		let mudelid = localStorage.getItem("mudelid");
		mudelid = JSON.parse(mudelid) || [];
		mudelid.push(mudelRef.current.value);
		mudelid = JSON.stringify(mudelid);
		localStorage.setItem("mudelid", mudelid);

		let maksumused = localStorage.getItem("maksumused");
		maksumused = JSON.parse(maksumused) || [];
		maksumused.push(maksumusRef.current.value);
		maksumused = JSON.stringify(maksumused);
		localStorage.setItem("maksumused", maksumused);
	};

	return (
		<div>
			<div>Sõnum: {message}</div>
			<label>Mark</label>
			<br />
			<input ref={markRef} type="text" />
			<br />
			<label>Mudel</label>
			<br />
			<input ref={mudelRef} type="text" />
			<br />
			<label>Maksumus</label>
			<br />
			<input ref={maksumusRef} type="number" />
			<br />
			<button onClick={() => addProduct()}>Sisesta</button>
		</div>
	);
}

export default LisaArvuti;
