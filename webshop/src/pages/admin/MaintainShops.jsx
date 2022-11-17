import L from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { toast, ToastContainer } from "react-toastify";
import config from "../../data/config.json";

let GreenIcon = new L.Icon({
	iconUrl:
		"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
	shadowUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

function MaintainShops() {
	const defaultShopLocation = {
		lat: 59.4378,
		lng: 24.7574,
	};
	const [shops, setShops] = useState([]);
	const [shopLocation, setShopPosition] = useState(defaultShopLocation);

	const nameRef = useRef();
	const infoRef = useRef();

	const markerRef = useRef(null);
	const eventHandlers = useMemo(
		() => ({
			dragend() {
				const marker = markerRef.current;
				if (marker != null) {
					setShopPosition(marker.getLatLng());
				}
			},
		}),
		[]
	);

	useEffect(() => {
		fetch(config.shopsDbUrl)
			.then((res) => res.json())
			.then((json) => {
				setShops(json || []);
			});
	}, []);

	const addNewShop = () => {
		const newShop = {
			name: nameRef.current.value,
			info: infoRef.current.value,
			lngLat: shopLocation,
		};
		shops.push(newShop);

		fetch(config.shopsDbUrl, {
			method: "PUT",
			body: JSON.stringify(shops),
		}).then(() => {
			nameRef.current.value = "";
			infoRef.current.value = "";
			setShopPosition(defaultShopLocation);
			setShops([...shops]);
			toast.success("Uus pood lisatud", {
				position: "bottom-right",
				theme: "light",
			});
		});
	};

	const deleteShop = (shopIndex) => {
		const updatedShops = [...shops];
		updatedShops.splice(shopIndex, 1);
		fetch(config.shopsDbUrl, {
			method: "PUT",
			body: JSON.stringify(updatedShops),
		}).then(() => {
			shops.splice(shopIndex, 1);
			setShops(updatedShops);
			toast.success("Pood kustutatud", {
				position: "bottom-right",
				theme: "light",
			});
		});
	};

	return (
		<div className="maintain-shops">
			<div>
				<label>Nimi</label>
				<br />
				<input ref={nameRef} type="text" />
				<br />
				<label>Info</label>
				<br />
				<input ref={infoRef} type="text" />
				<br />
				<label>Asukoht</label>
				<br />
				<MapContainer
					className="selection-map"
					center={defaultShopLocation}
					zoom={12}
					scrollWheelZoom={false}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker
						draggable="true"
						eventHandlers={eventHandlers}
						position={shopLocation}
						ref={markerRef}
						icon={GreenIcon}
					>
						<Popup minWidth={90}>Vali poe asukoht liigutades markerit.</Popup>
					</Marker>

					{shops.map((element, i) => (
						<Marker key={i} position={element.lngLat}>
							<Popup minWidth={90}>
								<div>{element.name}</div>
								<br />
								<Button
									variant="danger"
									size="sm"
									onClick={() => deleteShop(i)}
								>
									Eemalda
								</Button>
							</Popup>
						</Marker>
					))}
				</MapContainer>
				<br />
				<Button onClick={addNewShop}>Lisa pood</Button>
			</div>

			<div className="shops">
				{shops.map((element, i) => (
					<div key={i}>
						<div>
							<span>{element.name}</span>
							<Button variant="danger" size="sm" onClick={() => deleteShop(i)}>
								X
							</Button>
						</div>
					</div>
				))}
			</div>
			<ToastContainer />
		</div>
	);
}

export default MaintainShops;
