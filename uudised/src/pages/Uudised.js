function Uudised() {
	const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

	return (
		<div>
			<h2>Värsked uudised</h2>
			{uudised.length < 1 && (
				<div>Ühtegi uudist hetkel pole :( Lisame varsti!</div>
			)}
			{uudised.length > 0 && uudised.map((uudis) => <div>{uudis}</div>)}
		</div>
	);
}

export default Uudised;
