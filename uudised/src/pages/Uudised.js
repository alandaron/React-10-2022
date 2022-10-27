import { Link } from "react-router-dom";

function Uudised() {
	const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

	return (
		<div>
			<h2>Värsked uudised</h2>
			{uudised.length < 1 && (
				<div>Ühtegi uudist hetkel pole :( Lisame varsti!</div>
			)}
			{uudised.length > 0 &&
				uudised.map((uudis, i) => (
					<Link to={"/uudis/" + i}>
						<div>{uudis}</div>
					</Link>
				))}
		</div>
	);
}

export default Uudised;
