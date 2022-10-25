import { useState } from "react";
import { Link } from "react-router-dom";

function HaldaTooteid() {
	const [tooted, uuendaTooted] = useState(
		JSON.parse(localStorage.getItem("tooted")) || []
	);

	const kustuta = (i) => {
		tooted.splice(i, 1);
		uuendaTooted([...tooted]);
		localStorage.setItem("tooted", JSON.stringify(tooted));
	};

	return (
		<div>
			<div>Halda tooteid</div>
			{tooted.map((toode, i) => (
				<div key={i}>
					{toode}
					<button onClick={() => kustuta(i)}>Kustuta</button>
					<Link to={"/muuda-toode/" + i}>
						<button>Muuda</button>
					</Link>
				</div>
			))}
		</div>
	);
}

export default HaldaTooteid;
