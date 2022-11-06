import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsFromFile from "../../data/products.json";
import Button from "react-bootstrap/Button";

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

	return (
		<div>
			{product === undefined && <div>Toodet ei leitud.</div>}
			{product !== undefined && (
				<div>
					<label>ID</label>
					<br />
					<input defaultValue={product.id} ref={idRef} type="number"></input>
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
					<Button onClick={save}>Save</Button>
				</div>
			)}
		</div>
	);
}

export default EditProduct;
