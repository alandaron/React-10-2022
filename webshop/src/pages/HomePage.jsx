import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import productsFromFile from "../data/products.json";
import config from "../data/config.json";

// Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

// React toastify
import { toast, ToastContainer } from "react-toastify";

function HomePage() {
	const { t } = useTranslation();
	const [dbProducts, setDbProducts] = useState([]);
	const [products, setProducts] = useState([]);
	const categories = [
		...new Set(dbProducts.map((product) => product.category)),
	];
	// const productsFromDatabaseUrl =
	// 	"https://react-aron-db-default-rtdb.europe-west1.firebasedatabase.app/products.json";

	useEffect(() => {
		fetch(config.productsDbUrl)
			.then((res) => res.json())
			.then((json) => {
				setProducts(json);
				setDbProducts(json);
			});
	}, []);

	// sorteerimine .sort localeCompare
	// võtame kõik kategooriad toodete küljest ja kuvame need
	// .filter kategooriaid

	const sortAZ = () => {
		// ["guitar", "drum"].sort();
		products.sort((a, b) => a.name.localeCompare(b.name));
		setProducts(products.slice());
	};

	const sortZA = () => {
		//1.  products.sort((a,b) => a.name.localeCompare(b.name)).reverse();
		//2.  products.sort((a,b) => -1 * a.name.localeCompare(b.name));
		products.sort((a, b) => b.name.localeCompare(a.name));
		setProducts(products.slice());
	};

	const sortPriceAsc = () => {
		products.sort((a, b) => a.price - b.price);
		setProducts(products.slice());
	};

	const sortPriceDesc = () => {
		products.sort((a, b) => b.price - a.price);
		setProducts(products.slice());
	};

	const filterByCategory = (categoryClicked) => {
		const result = dbProducts.filter(
			(product) => product.category === categoryClicked
		);
		setProducts(result);
	};

	const addToCart = (product) => {
		let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
		// findIndex returnib numbri ehk indexi; -1 kui ei leitud
		const productInCartIndex = cart.findIndex(
			(element) => element.product_id === product.id
		);
		if (productInCartIndex >= 0) {
			cart[productInCartIndex].quantity += 1;
		} else {
			cart.push({ product_id: product.id, quantity: 1 });
		}
		sessionStorage.setItem("cart", JSON.stringify(cart));
		toast.success("Toode lisati ostukorvi!", {
			position: "bottom-right",
			theme: "light",
		});
	};

	if (products.length === 0) {
		return <Spinner animation="border" />;
	}

	return (
		<div>
			{categories.map((element) => (
				<button key={element} onClick={() => filterByCategory(element)}>
					{element}
				</button>
			))}

			<div>Kokku tooteid {products.length}</div>

			<button onClick={sortAZ}>Sorteeri A-Z</button>
			<button onClick={sortZA}>Sorteeri Z-A</button>
			<button onClick={sortPriceAsc}>Sorteeri hind kasvavalt</button>
			<button onClick={sortPriceDesc}>Sorteeri hind kahanevalt</button>
			<Row className="g-4">
				{products.map((product) => (
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
			<ToastContainer />
		</div>
	);
}

export default HomePage;
