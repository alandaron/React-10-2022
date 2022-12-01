import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { useTranslation } from "react-i18next";
import CartSumContext from "../../store/CartSumContext";

function Product({ product, showToast }) {
	const { t } = useTranslation();
	const cartSumCtx = useContext(CartSumContext);

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
		showToast.success(t("added_to_cart"), {
			position: "bottom-right",
			theme: "light",
		});
		cartSumCtx.calculateCartSum();
	};
	return (
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
	);
}

export default Product;
