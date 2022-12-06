import { useEffect, useMemo, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
// import InfiniteScroll from "react-infinite-scroll-component";
import api from "../config/api";

function Home() {
	const [products, setProducts] = useState([]);
	const [active, setActivePage] = useState(1);
	const [pages, setPages] = useState([]);
	const [loading, setLoading] = useState(false);
	let cart = useMemo(
		() => JSON.parse(sessionStorage.getItem("cart")) || [],
		[]
	);

	useEffect(() => {
		// List products
		setLoading(true);
		api
			.get("products", {
				per_page: 2,
				page: 1, // 20 products per page
			})
			.then((response) => {
				const totalPages = response.headers.get("X-WP-TotalPages");
				const pages = [];
				for (let page = 1; page <= totalPages; page++) {
					pages.push(page);
				}
				setPages(pages);

				const productsWithCount = response.data.map((element) => {
					const index = cart.findIndex(
						(cartProduct) => cartProduct.product_id === element.id
					);
					const count = index >= 0 ? cart[index].quantity : 0;
					return { ...element, count };
				});
				setProducts(productsWithCount);
				setLoading(false);
			});
	}, [cart]);

	const removeFromCart = (product) => {
		// findIndex returnib numbri ehk indexi; -1 kui ei leitud
		const productInCartIndex = cart.findIndex(
			(element) => element.product_id === product.id
		);
		const productIndex = products.indexOf(product);

		if (cart[productInCartIndex]?.quantity > 1) {
			cart[productInCartIndex].quantity -= 1;
		} else if (cart[productInCartIndex]?.quantity === 1) {
			cart.splice(productInCartIndex, 1);
		} else {
			return;
		}
		products[productIndex].count -= 1;
		setProducts([...products]);
		sessionStorage.setItem("cart", JSON.stringify(cart));
	};

	const addToCart = (product) => {
		// findIndex returnib numbri ehk indexi; -1 kui ei leitud
		const productInCartIndex = cart.findIndex(
			(element) => element.product_id === product.id
		);
		const productIndex = products.indexOf(product);
		if (productInCartIndex >= 0) {
			cart[productInCartIndex].quantity += 1;
		} else {
			cart.push({ product_id: product.id, quantity: 1 });
		}
		products[productIndex].count += 1;
		setProducts([...products]);
		sessionStorage.setItem("cart", JSON.stringify(cart));
	};

	const changePage = (newPage) => {
		setActivePage(newPage);
		// List products
		setLoading(true);

		api
			.get("products", {
				per_page: 2,
				page: newPage, // 20 products per page
			})
			.then((response) => {
				// Successful request
				// Successful request
				const productsWithCount = response.data.map((element) => {
					const index = cart.findIndex(
						(cartProduct) => cartProduct.product_id === element.id
					);
					const count = index >= 0 ? cart[index].quantity : 0;
					return { ...element, count };
				});
				setProducts(productsWithCount);
				setLoading(false);
			});
	};

	// const fetchData = () => {
	// 	api
	// 		.get("products", {
	// 			per_page: 2,
	// 			page: 2, // 20 products per page
	// 		})
	// 		.then((response) => {
	// 			// Successful request
	// 			setProducts(products.concat(response.data));
	// 			setLoading(false);
	// 		});
	// };

	return (
		<div>
			<Pagination>
				{pages.map((number) => (
					<Pagination.Item
						key={number}
						active={number === active}
						onClick={() => changePage(number)}
					>
						{number}
					</Pagination.Item>
				))}
			</Pagination>
			{loading ? (
				<div>Loading...</div>
			) : (
				products.map((element) => (
					<div key={element.id}>
						<img
							className="picture"
							src={element.images[0]?.src}
							alt="product"
						/>
						<div>{element.name}</div>
						<div>{element.price}</div>

						{element.count > 0 ? (
							<>
								<button onClick={() => removeFromCart(element)}>-</button>
								<span> {element.count} </span>
								<button onClick={() => addToCart(element)}>+</button>
							</>
						) : (
							<button onClick={() => addToCart(element)}>Add to cart</button>
						)}
					</div>
				))
			)}

			{/* <InfiniteScroll
				dataLength={products.length} //This is important field to render the next data
				next={fetchData}
				hasMore={true}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: "center" }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{products.map((element) => (
					<div key={element.id}>
						<img
							className="picture"
							src={element.images[0]?.src}
							alt="product"
						/>
						<div>{element.name}</div>
						<div>{element.price}</div>
						<button onClick={() => addToCart(element)}>Add to cart</button>
					</div>
				))}
			</InfiniteScroll> */}
		</div>
	);
}

export default Home;
