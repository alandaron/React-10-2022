import { useState } from "react";

function Seaded() {
	const [kujundus, muudaKujundus] = useState(
		localStorage.getItem("veebilehe_kujundus") || "light_mode"
	);

	const muudaKujundust = (mode) => {
		muudaKujundus(mode);
		localStorage.setItem("veebilehe_kujundus", mode);
	};

	return (
		<div>
			<button onClick={() => muudaKujundust("dark_mode")}>Tume leht</button>
			<button onClick={() => muudaKujundust("light_mode")}>Hele leht</button>
			<button onClick={() => muudaKujundust("colored_mode")}>Hele leht</button>
			{kujundus === "dark_mode" && <div>TUME LEHT</div>}
			{kujundus === "light_mode" && <div>HELE LEHT</div>}
			{kujundus === "colored_mode" && <div>VÄRVILINE LEHT</div>}
		</div>
	);
}

export default Seaded;
