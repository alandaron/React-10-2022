import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import productsFromFile from "../../data/products.json";
import Button from "react-bootstrap/Button";

function AddProduct() {
	const idRef = useRef();
	const nameRef = useRef();
	const priceRef = useRef();
	const categoryRef = useRef();
	const imageRef = useRef();
	const descriptionRef = useRef();
	const activeRef = useRef();

	const navigate = useNavigate();

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
		productsFromFile.push(newProduct);
		navigate("/admin/maintain-products");
	};

	return (
		<div>
			<div>
				<label>ID</label>
				<br />
				<input ref={idRef} type="number"></input>
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
				<Button onClick={save}>Save</Button>
			</div>
		</div>
	);
}

export default AddProduct;
