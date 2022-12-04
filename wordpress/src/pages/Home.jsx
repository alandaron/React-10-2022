import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import api from "../config/api";

function Home() {
	const [products, setProducts] = useState([]);
	const [active, setActivePage] = useState(2);
	let items = [1, 2, 3, 4, 5];

	useEffect(() => {
		// List products
		api
			.get("products", {
				per_page: 20, // 20 products per page
			})
			.then((response) => {
				// Successful request
				setProducts(response);
			});
	}, []);

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
	};

	return (
		<div>
			<Pagination>
				{items.map((number) => (
					<Pagination.Item
						key={number}
						active={number === active}
						onClick={() => setActivePage(number)}
					>
						{number}
					</Pagination.Item>
				))}
			</Pagination>
			{products.map((element) => (
				<div key={element.id}>
					<img className="picture" src={element.images[0]?.src} alt="product" />
					<div>{element.name}</div>
					<div>{element.price}</div>
					<button onClick={() => addToCart(element)}>Add to cart</button>
				</div>
			))}
		</div>
	);
}

export default Home;
