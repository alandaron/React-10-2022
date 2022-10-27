import { useParams } from "react-router-dom";

function YksUudis() {
	const { id } = useParams();
	const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
	const yksUudis = uudised[id];
	return <div>{yksUudis}</div>;
}

export default YksUudis;
