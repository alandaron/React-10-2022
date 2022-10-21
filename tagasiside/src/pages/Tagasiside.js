import { useRef, useState } from "react";

function Tagasiside() {
	const [tagasisided, uuendaTagasisided] = useState([
		"Oli hea",
		"Huvitav",
		"Teistsugune",
		"Põnev",
	]);
	const uusTagasisideRef = useRef();

	const kustuta = (i) => {
		tagasisided.splice(i, 1);
		uuendaTagasisided([...tagasisided]);
	};

	const lisaUusTagasiside = () => {
		if (uusTagasisideRef.current.value.trim() === "") return;
		tagasisided.push(uusTagasisideRef.current.value);
		uuendaTagasisided([...tagasisided]);
	};
	return (
		<div>
			<div>Tagasisided:</div>
			{tagasisided.map((tagasiside, i) => (
				<div key={i}>
					{tagasiside} <button onClick={() => kustuta(i)}>X</button>
				</div>
			))}

			<label>Lisa uus tagasiside:</label>
			<input ref={uusTagasisideRef} type="text" />
			<button onClick={lisaUusTagasiside}>Lisa</button>
		</div>
	);
}

export default Tagasiside;
