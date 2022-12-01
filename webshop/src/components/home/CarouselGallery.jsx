import Carousel from "react-bootstrap/Carousel";

function CarouselGallery() {
	const images = [
		{
			src: "https://picsum.photos/id/137/500/200",
			alt: "",
			header: "",
			text: "",
		},
		{
			src: "https://picsum.photos/id/237/500/200",
			alt: "",
			header: "",
			text: "",
		},
		{
			src: "https://picsum.photos/id/437/500/200",
			alt: "",
			header: "",
			text: "",
		},
		{
			src: "https://picsum.photos/id/337/500/200",
			alt: "",
			header: "",
			text: "",
		},
	];
	return (
		<Carousel>
			{images.map(({ src, alt, header, text }, i) => (
				<Carousel.Item key={i}>
					<img className="d-block w-100" src={src} alt={alt} />
					<Carousel.Caption>
						<h3>{header}</h3>
						<p>{text}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
}

export default CarouselGallery;
