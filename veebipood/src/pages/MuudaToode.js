import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MuudaToode() {
	const { id } = useParams();
	let tooted = JSON.parse(localStorage.getItem("tooted")) || [];
	const toode = tooted[id];
	const toodeRef = useRef();
	const navigate = useNavigate();

	const muuda = () => {
		if (toodeRef.current.value.trim() === "") return;
		tooted[id] = toodeRef.current.value.trim();
		localStorage.setItem("tooted", JSON.stringify(tooted));
		navigate("/halda-tooteid");
	};

	return (
		<div>
			{toode !== undefined && (
				<div>
					<label>Toote nimi </label>
					<input ref={toodeRef} type="text" defaultValue={toode} />
					<button onClick={muuda}>Muuda</button>
				</div>
			)}
			{toode === undefined && <div>Toodet ei leitud</div>}
		</div>
	);
}

export default MuudaToode;
