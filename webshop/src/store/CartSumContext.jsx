import { createContext, useCallback, useEffect, useState } from "react";
import config from "../data/config.json";
const CartSumContext = createContext(null);

export const CartSumContextProvider = (props) => {
	const [cartSum, setCartSum] = useState(null);
	const [dbProducts, setDbProducts] = useState(null);

	const calculateCartSum = useCallback(() => {
		const cartSS = JSON.parse(sessionStorage.getItem("cart")) || [];
		const cartWithProducts = cartSS.map((element) => {
			return {
				product: dbProducts.find(
					(product) => product.id === element.product_id
				),
				quantity: element.quantity,
			};
		});
		let cartSumCalculated = 0;
		cartWithProducts.forEach(
			(element) =>
				(cartSumCalculated =
					cartSumCalculated + element.product.price * element.quantity)
		);
		setCartSum(cartSumCalculated.toFixed(2));
	}, [dbProducts]);

	useEffect(() => {
		fetch(config.productsDbUrl)
			.then((res) => res.json())
			.then((json) => {
				setDbProducts(json);
			});
	}, []);

	useEffect(() => {
		if (dbProducts) {
			calculateCartSum();
		}
	}, [calculateCartSum, dbProducts]);

	return (
		<CartSumContext.Provider
			value={{
				cartSum: cartSum,
				setCartSum: setCartSum,
				calculateCartSum: calculateCartSum,
			}}
		>
			{props.children}
		</CartSumContext.Provider>
	);
};

export default CartSumContext;
