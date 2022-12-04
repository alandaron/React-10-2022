import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Payment from "../components/Payment";
import api from "../config/api";
import styles from "../css/Cart.module.css";

function Cart() {
	const [isLoading, setIsLoading] = useState(false);

	const cart = useMemo(
		() => JSON.parse(sessionStorage.getItem("cart")) || [],
		[]
	);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		// List products
		api
			.get("products", {
				per_page: 20, // 20 products per page
			})
			.then((response) => {
				// Successful request
				setProducts(response);
				const cartWithProducts = cart.map((element) => {
					return {
						product: response.find(
							(product) => product.id === element.product_id
						),
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
		return <div>Loading...</div>;
	}

	return (
		<div>
			{products.length > 0 && (
				<div className={styles["empty-cart-btn"]}>
					<button onClick={emptyCart}>Empty cart</button>
				</div>
			)}
			{products.length === 0 && (
				<div>
					Cart empty <Link to="/">Go shopping</Link>
				</div>
			)}

			{products.map((element, i) => (
				<div className={styles.product} key={element.product.id}>
					<img
						className={styles.image}
						alt=""
						src={element.product.images[0]?.src}
					/>
					<div className={styles.name}>{element.product.name}</div>
					<div className={styles.price}>{element.product.price} € / tk</div>
					<div className={styles.quantity}>
						<button
							className={styles.button}
							onClick={() => decreaseQuantity(i)}
						>
							-
						</button>
						<div>{element.quantity} tk</div>
						<button
							className={styles.button}
							onClick={() => increaseQuantity(i)}
						>
							+
						</button>
					</div>
					<div>{(element.product.price * element.quantity).toFixed(2)} €</div>

					<button onClick={() => removeFromCart(i)}>Remove</button>
				</div>
			))}

			{products.length > 0 && (
				<div>
					<div className={styles["info-box"]}>
						<div>Total products: {products.length}</div>
						<div>Total price: {calculateCartSum()} €</div>
					</div>
					<div className={styles["end-box"]}>
						<Payment sum={calculateCartSum()} />
					</div>
				</div>
			)}
		</div>
	);
}

export default Cart;
