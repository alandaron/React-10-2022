import { useRef, useState } from "react";

function Seaded() {
	const [keel, uuendaKeel] = useState(
		localStorage.getItem("veebilehe_keel") || "EST"
	);
	const telRef = useRef(localStorage.getItem("telefon"));
	const emailRef = useRef();

	const muudaKeel = (uusKeel) => {
		uuendaKeel(uusKeel);
		localStorage.setItem("veebilehe_keel", uusKeel);
	};

	const salvestaSeaded = () => {
		localStorage.setItem("telefon", telRef.current.value);
		localStorage.setItem("email", emailRef.current.value);
	};

	return (
		<div>
			<div>Seaded</div>
			<br />
			<label>Telefon</label>
			<input ref={telRef} type="text" />
			<br />
			<label>E-post</label>
			<input ref={emailRef} type="text" />
			<br />
			<button onClick={salvestaSeaded}>Salvesta</button>
			<br />
			<br />
			<div>Vali veebilehe keel:</div>
			<button onClick={() => muudaKeel("EST")}>Eesti</button>
			<button onClick={() => muudaKeel("ENG")}>Inglise</button>
			<button onClick={() => muudaKeel("RUS")}>Vene</button>
			{keel === "EST" && <div>Veebilehe keel on eesti</div>}
			{keel === "ENG" && <div>Veebilehe keel on inglise</div>}
			{keel === "RUS" && <div>Veebilehe keel on vene</div>}
		</div>
	);
}

export default Seaded;
