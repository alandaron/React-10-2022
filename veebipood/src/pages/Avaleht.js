import { useState } from "react";

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

	return (
		<div>
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
