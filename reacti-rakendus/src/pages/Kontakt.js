import { useState } from "react";
function Kontakt() {
	const [aadress, määraAadress] = useState("Tallinn");
	const [telefon, määraTelefon] = useState("5512345");
	const [email, määraEmail] = useState("bla@bla.com");
	const [ingliseKeelne, määraIngliseKeelne] = useState("ei");

	const muudaIngliseKeelseks = () => {
		määraAadress("Tallin");
		määraTelefon("Tallin");
		määraEmail("Tallin");
		määraIngliseKeelne("jah");
	};

	return (
		<div>
			<div>{aadress}</div>
			<div>{telefon}</div>
			<div>{email}</div>
			<button onClick={muudaIngliseKeelseks}>Muuda inglise keelseks</button>
			{ingliseKeelne === "jah" && <div>Leht on inglise keelne</div>}
		</div>
	);
}

export default Kontakt;
