import { useState } from "react";

function Meist() {
	const [telefon, uuendaTelefoni] = useState(localStorage.getItem("telefon"));
	const [n2itaEmaili, uuendaN2itaEmaili] = useState(false);

	return (
		<div>
			<div>Meist</div>
			<div>
				<span>Telefon: </span>
				{telefon || "Puudub"}
			</div>
			{telefon !== null && telefon.startsWith("+372") === false && (
				<button onClick={() => uuendaTelefoni("+372" + telefon)}>
					Lisa suunakood
				</button>
			)}
			<div>
				<span>E-post: </span>
				{!n2itaEmaili && (
					<button onClick={() => uuendaN2itaEmaili(true)}>Näita</button>
				)}
				{n2itaEmaili && (localStorage.getItem("email") || "Puudub")}
			</div>
		</div>
	);
}

export default Meist;
