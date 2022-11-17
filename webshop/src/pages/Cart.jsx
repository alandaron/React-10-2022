import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import config from "../data/config.json";

import "../css/cart.css";
// import productsFromFile from "../data/products.json";

// Bootstrap
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ParcelMachines from "../components/ParcelMachines";
import Payment from "../components/Payment";

function Cart() {
	const { t } = useTranslation();
	const [isLoading, setIsLoading] = useState(false);

	const cart = useMemo(
		() => JSON.parse(sessionStorage.getItem("cart")) || [],
		[]
	);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch(config.productsDbUrl)
			.then((res) => res.json())
			.then((json) => {
				const cartWithProducts = cart.map((element) => {
					return {
						product: json.find((product) => product.id === element.product_id),
						quantity: element.quantity,
					};
				});
				setProducts(
					cartWithProducts.filter((element) => element.product !== undefined)
				);
				setIsLoading(false);
			});
	}, [cart]);

	const removeFromCart = (productIndex) => {
		cart.splice(productIndex, 1); // uuendab storaget
		sessionStorage.setItem("cart", JSON.stringify(cart));

		products.splice(productIndex, 1); // uuendab HTML-i
		setProducts([...products]);
	};

	const emptyCart = () => {
		sessionStorage.setItem("cart", JSON.stringify([]));
		setProducts([]);
	};

	const calculateCartSum = () => {
		let total = 0;
		products.forEach(
			(product) => (total += product.product.price * product.quantity)
		);
		return total.toFixed(2);
	};

	const decreaseQuantity = (productIndex) => {
		cart[productIndex].quantity -= 1;
		sessionStorage.setItem("cart", JSON.stringify(cart));

		if (cart[productIndex].quantity <= 0) {
			removeFromCart(productIndex);
		}

		products[productIndex].quantity -= 1;
		setProducts([...products]);
	};

	const increaseQuantity = (productIndex) => {
		cart[productIndex].quantity += 1;
		sessionStorage.setItem("cart", JSON.stringify(cart));

		products[productIndex].quantity += 1;
		setProducts([...products]);
	};

	if (isLoading) {
		return <Spinner animation="border" />;
	}

	return (
		<div>
			{products.length > 0 && (
				<div className="empty-cart-btn">
					<Button onClick={emptyCart}>{t("empty_cart")}</Button>
				</div>
			)}
			{products.length === 0 && (
				<div>
					{t("cart_empty")} <Link to="/">{t("go_shopping_link")}</Link>
				</div>
			)}

			{products.map((element, i) => (
				<div className="product" key={element.id}>
					<img className="image" alt="" src={element.product.image} />
					<div className="name">{element.product.name}</div>
					<div className="price">{element.product.price} € / tk</div>
					<div className="quantity">
						<img
							className="button"
							onClick={() => decreaseQuantity(i)}
							src={require("../images/minus.png")}
							alt=""
						/>
						<div>{element.quantity} tk</div>
						<img
							className="button"
							onClick={() => increaseQuantity(i)}
							src={require("../images/add.png")}
							alt=""
						/>
					</div>
					<div>{(element.product.price * element.quantity).toFixed(2)} €</div>

					<img
						className="button"
						onClick={() => removeFromCart(i)}
						src={require("../images/trash.png")}
						alt=""
					/>
				</div>
			))}

			{products.length > 0 && (
				<div>
					<div className="info-box">
						<div>
							{t("total_products")}: {products.length}
						</div>
						<div>
							{t("total_price")}: {calculateCartSum()} €
						</div>
					</div>
					<div className="end-box">
						<ParcelMachines />
						<br />
						<Payment sum={calculateCartSum()} />
					</div>
				</div>
			)}
		</div>
	);
}

export default Cart;
