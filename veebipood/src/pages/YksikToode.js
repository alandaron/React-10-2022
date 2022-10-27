import { useParams } from "react-router-dom";

function YksikToode() {
	const { id } = useParams();
	const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
	const toode = tooted[id];

	return (
		<div>
			{toode !== undefined && (
				<div>
					<img width={100} src={toode.pilt} alt="pilt"></img>
					<div>{toode.nimi}</div>
					<div>{toode.hind}</div>
					<div>{toode.aktiivne}</div>
				</div>
			)}
			{toode === undefined && <div>Toodet ei leitud</div>}
		</div>
	);
}

export default YksikToode;
