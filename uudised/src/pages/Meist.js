function Meist() {
	const tootajad = [
		{
			Nimi: "Arvo",
			Ala: "Muusika",
			Telefon: "Täpsustamisel",
		},
		{
			Nimi: "Kelly",
			Ala: "Reporter",
			Telefon: "Täpsustamisel",
		},
		{
			Nimi: "Edward",
			Ala: "Kujundus",
			Telefon: "Täpsustamisel",
		},
		{
			Nimi: "Kerli",
			Ala: "Välisturud",
			Telefon: "Täpsustamisel",
		},
	];

	return (
		<div>
			<h2>Kes me oleme?</h2>
			<hr />
			{/* <div>Aron Aland</div>
			<div>+372 561 116 92</div>
			<div>Front-end arendaja</div>
			<br />
			<div>Juku</div>
			<div>+372 123 456 78</div>
			<div>Anekdootide kirjutaja</div>
			<br />
			<div>Peeter</div>
			<div>+372 123 456 78</div>
			<div>Uudiste kujundamine</div>
			<br />
			<div>Juhan</div>
			<div>+372 123 456 78</div>
			<div>Püstolreporter</div> */}
			{tootajad.map((tootaja, i) => (
				<div key={i}>
					<div>{tootaja.Nimi}</div>
					<div>{tootaja.Telefon}</div>
					<div>{tootaja.Ala}</div>
				</div>
			))}
		</div>
	);
}

export default Meist;
