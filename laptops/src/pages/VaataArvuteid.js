function VaataArvuteid() {
	const margid = JSON.parse(localStorage.getItem("margid")) || [];
	const mudelid = JSON.parse(localStorage.getItem("mudelid")) || [];
	const maksumused = JSON.parse(localStorage.getItem("maksumused")) || [];
	return (
		<div>
			{margid.map((mark) => (
				<div>{mark}</div>
			))}
			{mudelid.map((mudel) => (
				<div>{mudel}</div>
			))}
			{maksumused.map((maksumus) => (
				<div>{maksumus}</div>
			))}
		</div>
	);
}

export default VaataArvuteid;
