import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MuudaToode() {
	const { id } = useParams();
	let tooted = JSON.parse(localStorage.getItem("tooted")) || [];
	const toode = tooted[id];
	const nimiRef = useRef();
	const hindRef = useRef();
	const piltRef = useRef();
	const aktiivneRef = useRef();
	const navigate = useNavigate();

	const muuda = () => {
		const muudetudToode = {
			nimi: nimiRef.current.value.trim(),
			hind: Number(hindRef.current.value.trim()),
			pilt: piltRef.current.value.trim(),
			aktiivne: aktiivneRef.current.checked,
		};
		tooted[id] = muudetudToode;
		localStorage.setItem("tooted", JSON.stringify(tooted));
		navigate("/halda-tooteid");
	};

	return (
		<div>
			{toode !== undefined && (
				<div>
					<label>Toote nimi </label>
					<input ref={nimiRef} type="text" defaultValue={toode.nimi} />
					<br />
					<label>Toote hind </label>
					<input ref={hindRef} type="number" defaultValue={toode.hind} />
					<br />
					<label>Toote pilt </label>
					<input ref={piltRef} type="text" defaultValue={toode.pilt} />
					<br />
					<label>Toode aktiivne </label>
					<input
						ref={aktiivneRef}
						type="checkbox"
						defaultChecked={toode.aktiivne}
					/>
					<br />
					<button onClick={muuda}>Muuda</button>
				</div>
			)}
			{toode === undefined && <div>Toodet ei leitud</div>}
		</div>
	);
}

export default MuudaToode;
