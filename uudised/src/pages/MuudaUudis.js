import { useRef } from "react";
import { useParams } from "react-router-dom";

function MuudaUudis() {
	const { id } = useParams();
	const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
	const yksUudis = uudised[id];
	const uudisRef = useRef();

	const save = () => {
		if (uudisRef.current.value.trim() === "") return;
		uudised[id] = uudisRef.current.value.trim();
		localStorage.setItem("uudised", JSON.stringify(uudised));
	};
	return (
		<div>
			<label>Uudise pealkiri: </label>
			<input ref={uudisRef} type="text" defaultValue={yksUudis} />
			<button onClick={save}>Salvesta</button>
		</div>
	);
}

export default MuudaUudis;
