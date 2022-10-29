import { useState } from "react";

function Avaleht() {
	const [valitudTegelane, uuendaValitudTegelane] = useState();

	const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];

	const valiTegelane = (tegelane) => {
		const tegelased =
			JSON.parse(localStorage.getItem("valitud_tegelased")) || [];
		tegelased.push(tegelane);
		localStorage.setItem("valitud_tegelased", JSON.stringify(tegelased));
		uuendaValitudTegelane(tegelane.eesnimi);
	};

	return (
		<div>
			{valitudTegelane !== undefined && (
				<div>Valisid tegelase: {valitudTegelane}</div>
			)}
			{tegelased.map((tegelane, i) => (
				<div key={i}>
					<div>{tegelane.eesnimi}</div>
					<div>{tegelane.perenimi}</div>
					<div>{tegelane.elukoht}</div>
					<div>{tegelane.vanus}</div>
					<button onClick={() => valiTegelane(tegelane)}>Vali tegelane</button>
					<br />
				</div>
			))}
		</div>
	);
}

export default Avaleht;
