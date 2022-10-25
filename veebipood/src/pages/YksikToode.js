import { useParams } from "react-router-dom";

function YksikToode() {
	const { id } = useParams();
	const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
	const toode = tooted[id];

	return (
		<div>
			{toode !== undefined && <div>{toode}</div>}
			{toode === undefined && <div>Toodet ei leitud</div>}
		</div>
	);
}

export default YksikToode;
