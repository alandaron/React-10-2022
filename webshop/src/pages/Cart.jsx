import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import "../css/cart.css";
import productsFromFile from "../data/products.json";

// Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Cart() {
	const { t } = useTranslation();

	const cart = useMemo(
		() => JSON.parse(sessionStorage.getItem("cart")) || [],
		[]
	);
	const [products, setProducts] = useState([]);
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

		const cartWithProducts = cart.map((element) => {
			return {
				product: productsFromFile.find(
					(product) => product.id === element.product_id
				),
				quantity: element.quantity,
			};
		});
		setProducts(cartWithProducts);
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

	return (
		<div>
			{products.length > 0 && (
				<div>
					<Button onClick={emptyCart}>{t("empty_cart")}</Button>
					<div>
						{t("total_products")}: {products.length}
					</div>
					<div>
						{t("total_price")}: {calculateCartSum()} €
					</div>
				</div>
			)}
			{products.length === 0 && <div>{t("cart_empty")}</div>}

			<Form.Select>
				{parcelMachines.map((machine) => (
					<option key={machine.NAME}>{machine.NAME}</option>
				))}
			</Form.Select>

			{products.map((product, i) => (
				<div className="product" key={product.id}>
					<img className="image" alt="" src={product.product.image} />
					<div className="name">{product.product.name}</div>
					<div className="price">{product.product.price} €</div>
					<div className="quantity">{product.quantity} tk</div>
					<Button
						className="button"
						onClick={() => removeFromCart(i)}
						variant="danger"
					>
						{t("remove_from_cart")}
					</Button>
				</div>
			))}
		</div>
	);
}

export default Cart;
