import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { useEffect, useState } from "react";

function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		// const api = new WooCommerceRestApi({
		// 	url: "http://localhost/wordpress",
		// 	consumerKey: "ck_625fc57a6f081362c8c8600886c1b22c9d767f7e",
		// 	consumerSecret: "cs_de105d307dd431c097dc169e0d39d8573e320bfc",
		// 	version: "wc/v3",
		// });
		// // List products
		// api
		// 	.get("products", {
		// 		per_page: 20, // 20 products per page
		// 	})
		// 	.then((response) => {
		// 		// Successful request
		// 		setProducts(response.data);
		// 	});

		fetch("http://localhost/wordpress/wp-json/wc/store/v1/products")
			.then((res) => res.json())
			.then((json) => setProducts(json));
	}, []);

	return (
		<div>
			{products.map((element) => (
				<div>
					<img width={150} src={element.images[0]?.src} alt="" />
					<div>{element.name}</div>
					<div>{element.prices.price}</div>
				</div>
			))}
		</div>
	);
}

export default Home;
