import productsFromFile from "../data/products.json";
import { useTranslation } from "react-i18next";

// Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function HomePage() {
	const { t } = useTranslation();

	// sorteerimine .sort localeCompare
	// võtame kõik kategooriad toodete küljest ja kuvame need
	// .filter kategooriaid

	const addToCart = (product) => {
		let cart = JSON.parse(localStorage.getItem("cart")) || [];
		cart.push(product);
		localStorage.setItem("cart", JSON.stringify(cart));
	};

	return (
		<Row className="g-4">
			{productsFromFile.map((product) => (
				<Col key={product.id}>
					<Card style={{ width: "18rem", height: "32em" }}>
						<Card.Img
							style={{ height: 250, objectFit: "cover" }}
							variant="top"
							src={product.image}
						/>
						<Card.Body>
							<Card.Title>{product.name}</Card.Title>
							<Card.Text>{product.price}€</Card.Text>
							<Card.Text>{product.description}</Card.Text>
							<Button
								style={{ bottom: 10, position: "absolute" }}
								onClick={() => addToCart(product)}
								variant="primary"
							>
								{t("add_to_cart")}
							</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default HomePage;
