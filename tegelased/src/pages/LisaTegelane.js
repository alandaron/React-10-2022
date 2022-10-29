import { useRef, useState } from "react";

function LisaTegelane() {
	const [sonum, uusSonum] = useState("");
	const eesnimiRef = useRef();
	const perenimiRef = useRef();
	const elukohtRef = useRef();
	const vanusRef = useRef();

	const lisa = () => {
		if (eesnimiRef.current.value.trim() === "") {
			uusSonum("Tühja nimega ei saa sisestada");
		} else {
			uusSonum("Tegelane lisatud");
			const tegelased =
				JSON.parse(localStorage.getItem("valitud_tegelased")) || [];
			tegelased.push({
				eesnimi: eesnimiRef.current.value.trim(),
				perenimi: perenimiRef.current.value.trim(),
				elukoht: elukohtRef.current.value.trim(),
				vanus: Number(vanusRef.current.value),
			});
			localStorage.setItem("tegelased", JSON.stringify(tegelased));
		}
	};
	return (
		<div>
			<div>{sonum}</div>
			<labe>Tegelase eesnimi</labe>
			<br />
			<input ref={eesnimiRef} type="text" />
			<br />
			<label>Tegelase perenimi</label>
			<br />
			<input ref={perenimiRef} type="text" />
			<br />
			<label>Tegelase elukoht</label>
			<br />
			<input ref={elukohtRef} type="text" />
			<br />
			<label>Tegelase vanus</label>
			<br />
			<input ref={vanusRef} type="number" />
			<br />
			<button onClick={lisa}>Lisa uus</button>
		</div>
	);
}

export default LisaTegelane;
