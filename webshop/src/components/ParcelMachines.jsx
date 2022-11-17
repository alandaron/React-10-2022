import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

function ParcelMachines() {
	const [parcelMachines, setParcelMachines] = useState([]);

	useEffect(() => {
		fetch("https://www.omniva.ee/locations.json")
			.then((res) => res.json())
			.then((json) =>
				setParcelMachines(
					json.filter(
						(machine) => machine.A0_NAME === "EE" && machine.ZIP !== "96331"
					)
				)
			);
	});

	return (
		<>
			<Form.Label>Vali pakiautomaat:</Form.Label>
			<Form.Select>
				{parcelMachines.map((machine) => (
					<option key={machine.NAME}>{machine.NAME}</option>
				))}
			</Form.Select>
		</>
	);
}

export default ParcelMachines;
