import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
// import productsFromFile from "../../data/products.json";
import Spinner from "react-bootstrap/Spinner";
import config from "../../data/config.json";

function EditProduct() {
	const { id } = useParams();
	const [dbProducts, setDbProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const product = dbProducts.find((product) => product.id === Number(id));
	const productIndex = dbProducts.indexOf(product);

	const idRef = useRef();
	const nameRef = useRef();
	const priceRef = useRef();
	const categoryRef = useRef();
	const imageRef = useRef();
	const descriptionRef = useRef();
	const activeRef = useRef();

	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);

		fetch(config.categoriesDbUrl)
			.then((res) => res.json())
			.then((json) => {
				setCategories(json || []);
			});

		fetch(config.productsDbUrl)
			.then((res) => res.json())
			.then((json) => {
				setDbProducts(json);
				setIsLoading(false);
			});
	}, []);

	const save = () => {
		const updatedProduct = {
			id: Number(idRef.current.value),
			name: nameRef.current.value,
			price: Number(priceRef.current.value),
			category: categoryRef.current.value,
			image: imageRef.current.value,
			description: descriptionRef.current.value,
			active: activeRef.current.checked,
		};
		dbProducts[productIndex] = updatedProduct;

		fetch(config.productsDbUrl, {
			method: "PUT",
			body: JSON.stringify(dbProducts),
		}).then(() => {
			navigate("/admin/maintain-products");
		});
	};

	const [idUnique, setIdUnique] = useState(true);

	const checkIdUniqueness = () => {
		if (idRef.current.value === "") {
			setIdUnique(false);
			return;
		}

		if (idRef.current.value === id) {
			setIdUnique(true);
			return; // sellega lõpetab funktsiooni
		}

		const result = dbProducts.find(
			(element) => element.id === Number(idRef.current.value)
		);

		if (result === undefined) {
			setIdUnique(true);
			return;
		}

		setIdUnique(false);
	};

	if (isLoading) {
		return (
			<div>
				<Spinner animation="border" />
			</div>
		);
	}

	return (
		<div>
			{product === undefined && <div>Toodet ei leitud.</div>}
			{product !== undefined && (
				<div>
					{idUnique === false && <div>Sisestatud ID on juba kasutusel!</div>}
					<label>ID</label>
					<br />
					<input
						onChange={checkIdUniqueness}
						defaultValue={product.id}
						ref={idRef}
						type="number"
					></input>
					<br />
					<label>Name</label>
					<br />
					<input defaultValue={product.name} ref={nameRef} type="text"></input>
					<br />
					<label>Price</label>
					<br />
					<input
						defaultValue={product.price}
						ref={priceRef}
						type="number"
					></input>
					<br />
					<label>Category</label>
					<br />
					<select ref={categoryRef} defaultValue={product.category} type="text">
						{categories.map((element, i) => (
							<option key={i}>{element.name}</option>
						))}
					</select>
					<br />
					<label>Image</label>
					<br />
					<input
						defaultValue={product.image}
						ref={imageRef}
						type="text"
					></input>
					<br />
					<label>Description</label>
					<br />
					<input
						defaultValue={product.description}
						ref={descriptionRef}
						type="text"
					></input>
					<br />
					<label>Active</label>
					<input
						defaultChecked={product.active}
						ref={activeRef}
						type="checkbox"
					></input>
					<br />
					<Button disabled={!idUnique} onClick={save}>
						Save
					</Button>
				</div>
			)}
		</div>
	);
}

export default EditProduct;
