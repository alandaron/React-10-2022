import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import productsFromFile from "../../data/products.json";
import config from "../../data/config.json";

function MaintainProducts() {
	const [dbProducts, setDbProducts] = useState([]);
	const [products, setProducts] = useState([]);
	const searchedProduct = useRef();

	useEffect(() => {
		fetch(config.productsDbUrl)
			.then((res) => res.json())
			.then((json) => {
				setProducts(json);
				setDbProducts(json);
			});
	}, []);

	const search = () => {
		// proovige filterdada (leida) nime alusel toode üles
		const result = dbProducts.filter((element) =>
			element.name
				.toLowerCase()
				.includes(searchedProduct.current.value.toLowerCase())
		);
		setProducts(result);
	};

	const deleteProduct = (product) => {
		// const productIndex = dbProducts.findIndex(
		// 	(element) => element.id === product.id
		// );
		// dbProducts.splice(productIndex, 1);
		// setProducts([...dbProducts]);
	};

	return (
		<div>
			<input ref={searchedProduct} onKeyUp={search} type="text" />
			<span>Tooteid kokku {products.length}</span>
			{products.map((element) => (
				<div key={element.id}>
					<img src={element.image} alt="" />
					<div>{element.name}</div>
					<div>{element.price}</div>
					<Link to={"/admin/edit-product/" + element.id}>
						<Button>Muuda</Button>
					</Link>
					<Button onClick={() => deleteProduct(element)}>Kustuta</Button>
				</div>
			))}
		</div>
	);
}

export default MaintainProducts;
