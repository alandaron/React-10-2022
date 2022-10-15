import { useState } from "react";

function Kontakt() {
	const [kontakt, n2itaKontakt] = useState("");
	return (
		<div>
			<h2>Võta ühendust</h2>
			<hr />
			<div>Laiuse</div>
			<div>Vahtra 3-3</div>
			<button onClick={() => n2itaKontakt("+372 123 456 78")}>
				Võta ühendust
			</button>
			<br />
			<div>Jõgeva</div>
			<div>Rohu 6</div>
			<button onClick={() => n2itaKontakt("+372 123 456 78")}>
				Võta ühendust
			</button>
			{kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
		</div>
	);
}

export default Kontakt;
