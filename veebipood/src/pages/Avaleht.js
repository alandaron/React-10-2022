import { useState } from "react";
import { Link } from "react-router-dom";

function Avaleht() {
	const [like, uuendaLike] = useState(false);

	const [kogus, uuendaKogus] = useState(5);

	const v2henda = () => {
		uuendaKogus(kogus - 1);
	};

	const suurenda = () => {
		uuendaKogus(kogus + 1);
	};

	const nulli = () => {
		uuendaKogus(0);
	};

	const tooted = JSON.parse(localStorage.getItem("tooted")) || [];

	const lisaOstukorvi = (toode) => {
		let ostukorv = localStorage.getItem("ostukorv");
		ostukorv = JSON.parse(ostukorv) || [];
		ostukorv.push(toode);
		ostukorv = JSON.stringify(ostukorv);
		localStorage.setItem("ostukorv", ostukorv);
	};

	return (
		<div>
			{tooted
				.filter((toode) => toode.aktiivne === true)
				.map((toode, i) => (
					<div key={i}>
						<Link to={"/toode/" + i}>
							<img width={100} src={toode.pilt} alt="pilt"></img>
							<div>{toode.nimi}</div>
							<div>{toode.hind}</div>
							<div>{toode.aktiivne}</div>
						</Link>
						<button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
					</div>
				))}

			<h1>Avaleht</h1>
			{like === true && (
				<img onClick={() => uuendaLike(false)} src="/liked.svg" alt="" />
			)}
			{like === false && (
				<img onClick={() => uuendaLike(true)} src="/not-liked.svg" alt="" />
			)}
			<br />
			{kogus > 0 && <button onClick={nulli}>nulli</button>}
			<button disabled={kogus === 0} onClick={v2henda}>
				-
			</button>
			<p>Kogus: {kogus}</p>
			<button onClick={suurenda}>+</button>
		</div>
	);
}

export default Avaleht;
