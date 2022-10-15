import { useRef } from "react";

function Kontakt() {
	const nimi = useRef();
	const email = useRef();
	const sisu = useRef();

	const SendMessage = (e) => {
		e.preventDefault();
		console.log(nimi.current.value);
		console.log(email.current.value);
		console.log(sisu.current.value);
	};

	return (
		<div>
			<div>Võta minuga ühendust</div>
			<form onSubmit={SendMessage}>
				<label htmlFor="nimi">Sinu nimi: </label>
				<input ref={nimi} type="text" id="nimi" placeholder="Näide: Aron" />
				<br />
				<label htmlFor="email">Sinu e-post: </label>
				<input
					ref={email}
					type="email"
					id="email"
					placeholder="Näide: aron@aland.ee"
				/>
				<br />
				<label htmlFor="sisu">Sisu: </label>
				<br />
				<textarea
					ref={sisu}
					id="sisu"
					placeholder="Kirjuta oma sõnum siia"
					rows={5}
					cols={50}
				/>
				<br />
				<button type="submit">Saada sõnum</button>
			</form>
		</div>
	);
}

export default Kontakt;
