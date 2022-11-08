import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import productsFromFile from "../../data/products.json";

function EditProduct() {
	const { id } = useParams();
	const product = productsFromFile.find((product) => product.id === Number(id));
	const productIndex = productsFromFile.indexOf(product);

	const idRef = useRef();
	const nameRef = useRef();
	const priceRef = useRef();
	const categoryRef = useRef();
	const imageRef = useRef();
	const descriptionRef = useRef();
	const activeRef = useRef();

	const navigate = useNavigate();

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
		productsFromFile[productIndex] = updatedProduct;
		console.log(productsFromFile[productIndex]);
		navigate("/admin/maintain-products");
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

		const result = productsFromFile.find(
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
					<input
						defaultValue={product.category}
						ref={categoryRef}
						type="text"
					></input>
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
