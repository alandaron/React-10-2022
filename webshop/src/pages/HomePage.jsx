import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import productsFromFile from "../data/products.json";
import config from "../data/config.json";

// Bootstrap

import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

// React toastify
import { toast, ToastContainer } from "react-toastify";
import CarouselGallery from "../components/home/CarouselGallery";
import Product from "../components/home/Product";
import SortButtons from "../components/home/SortButtons";

function HomePage() {
	// const { t } = useTranslation();
	const [dbProducts, setDbProducts] = useState([]);
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	// const productsFromDatabaseUrl =
	// 	"https://react-aron-db-default-rtdb.europe-west1.firebasedatabase.app/products.json";

	useEffect(() => {
		fetch(config.productsDbUrl)
			.then((res) => res.json())
			.then((json) => {
				setProducts(json || []);
				setDbProducts(json || []);
			});

		fetch(config.categoriesDbUrl)
			.then((res) => res.json())
			.then((json) => {
				setCategories(json || []);
			});
	}, []);

	const filterByCategory = (categoryClicked) => {
		const result = dbProducts.filter(
			(product) => product.category === categoryClicked
		);
		setProducts(result);
	};

	const showAllProducts = () => {
		setProducts([...dbProducts]);
	};

	if (products.length === 0) {
		return <Spinner animation="border" />;
	}

	return (
		<div>
			<CarouselGallery />
			<button onClick={showAllProducts}>Kõik tooted</button>
			{categories.map((element, i) => (
				<button key={i} onClick={() => filterByCategory(element.name)}>
					{element.name}
				</button>
			))}

			<div>Kokku tooteid {products.length}</div>
			<SortButtons products={products} setProducts={setProducts} />
			<Row className="g-4">
				{products
					.filter((product) => product.active === true)
					.map((product) => (
						<Product key={product.id} product={product} showToast={toast} />
					))}
			</Row>
			<ToastContainer />
		</div>
	);
}

export default HomePage;
