import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
// import productsFromFile from "../../data/products.json";
import config from "../../data/config.json";

function AddProduct() {
	const [dbProducts, setDbProducts] = useState([]);

	const idRef = useRef();
	const nameRef = useRef();
	const priceRef = useRef();
	const categoryRef = useRef();
	const imageRef = useRef();
	const descriptionRef = useRef();
	const activeRef = useRef();

	const navigate = useNavigate();

	const [idUnique, setIdUnique] = useState(true);

	useEffect(() => {
		fetch(config.productsDbUrl)
			.then((res) => res.json())
			.then((json) => setDbProducts(json));
	}, []);

	const save = () => {
		const newProduct = {
			id: Number(idRef.current.value),
			name: nameRef.current.value,
			price: Number(priceRef.current.value),
			category: categoryRef.current.value,
			image: imageRef.current.value,
			description: descriptionRef.current.value,
			active: activeRef.current.checked,
		};
		dbProducts.push(newProduct);

		navigate("/admin/maintain-products");
	};

	const checkIdUniqueness = () => {
		if (idRef.current.value === "") {
			setIdUnique(false);
			return;
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

	return (
		<div>
			<div>
				{idUnique === false && <div>Sisestatud ID on juba kasutusel!</div>}
				<label>ID</label>
				<br />
				<input ref={idRef} type="number" onChange={checkIdUniqueness}></input>
				<br />
				<label>Name</label>
				<br />
				<input ref={nameRef} type="text"></input>
				<br />
				<label>Price</label>
				<br />
				<input ref={priceRef} type="number"></input>
				<br />
				<label>Category</label>
				<br />
				<input ref={categoryRef} type="text"></input>
				<br />
				<label>Image</label>
				<br />
				<input ref={imageRef} type="text"></input>
				<br />
				<label>Description</label>
				<br />
				<input ref={descriptionRef} type="text"></input>
				<br />
				<label>Active</label>
				<input ref={activeRef} type="checkbox"></input>
				<br />
				<Button disabled={!idUnique} onClick={save}>
					Save
				</Button>
			</div>
		</div>
	);
}

export default AddProduct;
