import { useEffect, useState } from "react";

import Map from "../components/Map";
import config from "../data/config.json";

function Shops() {
	const [shops, setShops] = useState([]);
	const [coordinaates, setCoordinates] = useState({
		lngLat: [59.4378, 24.7574],
		zoom: 11,
	});

	useEffect(() => {
		fetch(config.shopsDbUrl)
			.then((res) => res.json())
			.then((json) => {
				setShops(json || []);
			});
	}, []);

	return (
		<div>
			<button
				onClick={() =>
					setCoordinates({
						lngLat: [58.7632, 25.497],
						zoom: 7,
					})
				}
			>
				Kõik poed
			</button>
			<button
				onClick={() => setCoordinates({ lngLat: [59.4378, 24.7574], zoom: 11 })}
			>
				Kõik Tallinna poed
			</button>

			{shops.map((element, i) => (
				<button
					key={i}
					onClick={() => setCoordinates({ lngLat: element.lngLat, zoom: 13 })}
				>
					{element.name}
				</button>
			))}

			<Map mapCoordinaates={coordinaates} shops={shops} />
		</div>
	);
}

export default Shops;
