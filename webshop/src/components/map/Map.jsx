import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ChangeView from "./ChangeView";

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [2, -40],
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) {
	return (
		<div>
			<MapContainer
				className="map"
				center={props.mapCoordinaates.lngLat}
				zoom={props.mapCoordinaates.zoom}
				scrollWheelZoom={false}
			>
				<ChangeView
					center={props.mapCoordinaates.lngLat}
					zoom={props.mapCoordinaates.zoom}
				/>

				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				{props.shops?.map((element, i) => (
					<Marker key={i} position={element.lngLat}>
						<Popup>
							{element.name} <br /> {element.info}
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
}

export default Map;
