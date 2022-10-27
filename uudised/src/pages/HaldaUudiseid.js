import { useState } from "react";
import { Link } from "react-router-dom";

function HaldaUudiseid() {
	const [uudised, uuendaUudised] = useState(
		JSON.parse(localStorage.getItem("uudised")) || []
	);
	const kustuta = (i) => {
		uudised.splice(i, 1);
		uuendaUudised([...uudised]);
		localStorage.setItem("uudised", JSON.stringify(uudised));
	};

	return (
		<div>
			{uudised.map((uudis, i) => (
				<div>
					{uudis} <button onClick={() => kustuta(i)}>x</button>{" "}
					<Link to={"/muuda/" + i}>
						<button>Muuda</button>
					</Link>
				</div>
			))}
		</div>
	);
}

export default HaldaUudiseid;
