import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import productsFromFile from "../../data/products.json";

function MaintainProducts() {
	const [products, setProducts] = useState(productsFromFile.slice());
	const searchedProduct = useRef();

	const search = () => {
		// proovige filterdada (leida) nime alusel toode üles
		const result = productsFromFile.filter((element) =>
			element.name
				.toLowerCase()
				.includes(searchedProduct.current.value.toLowerCase())
		);
		setProducts(result);
	};

	const deleteProduct = (product) => {
		const productIndex = productsFromFile.findIndex(
			(element) => element.id === product.id
		);
		productsFromFile.splice(productIndex, 1);
		setProducts([...productsFromFile]);
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
