import { useState } from "react";
import { useTranslation } from "react-i18next";

// Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cart() {
	const { t } = useTranslation();

	const [products, setProducts] = useState(
		JSON.parse(localStorage.getItem("cart")) || []
	);

	const removeFromCart = (productIndex) => {
		products.splice(productIndex, 1);
		localStorage.setItem("cart", JSON.stringify(products));
		setProducts([...products]);
	};

	const emptyCart = () => {
		localStorage.setItem("cart", JSON.stringify([]));
		setProducts([]);
	};

	const calculateCartSum = (productIndex) => {
		let total = 0;
		products.forEach((product) => (total += product.price));
		return total.toFixed(2);
	};

	return (
		<div>
			{products.length > 0 && (
				<div>
					<Button onClick={emptyCart}>{t("empty_cart")}</Button>
					<div>
						{t("total_products")}: {products.length}
					</div>
					<div>
						{t("total_price")}: {calculateCartSum()}€
					</div>
				</div>
			)}
			{products.length === 0 && <div>{t("cart_empty")}</div>}

			{products.map((product, i) => (
				<Card key={product.id} style={{ width: "18rem", height: "32em" }}>
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
							onClick={() => removeFromCart(i)}
							variant="primary"
						>
							{t("remove_from_cart")}
						</Button>
					</Card.Body>
				</Card>
			))}
		</div>
	);
}

export default Cart;
