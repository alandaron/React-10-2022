import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
// import productsFromFile from "../../data/products.json";
import { toast, ToastContainer } from "react-toastify";
import FileUpload from "../../components/FileUpload";
import config from "../../data/config.json";

function AddProduct() {
	const [dbProducts, setDbProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [imageUrl, setImageUrl] = useState("");

	const idRef = useRef();
	const nameRef = useRef();
	const priceRef = useRef();
	const categoryRef = useRef();
	const imageRef = useRef();
	const descriptionRef = useRef();
	const activeRef = useRef();

	const [idUnique, setIdUnique] = useState(false);

	useEffect(() => {
		fetch(config.productsDbUrl)
			.then((res) => res.json())
			.then((json) => setDbProducts(json) || []);

		fetch(config.categoriesDbUrl)
			.then((res) => res.json())
			.then((json) => setCategories(json || []));
	}, []);

	const save = () => {
		const newProduct = {
			id: Number(idRef.current.value),
			name: nameRef.current.value,
			price: Number(priceRef.current.value),
			category: categoryRef.current.value,
			image: imageUrl,
			description: descriptionRef.current.value,
			active: activeRef.current.checked,
		};
		dbProducts.push(newProduct);

		fetch(config.productsDbUrl, {
			method: "PUT",
			body: JSON.stringify(dbProducts),
		}).then(() => {
			idRef.current.value = "";
			nameRef.current.value = "";
			priceRef.current.value = "";
			imageRef.current.value = "";
			descriptionRef.current.value = "";
			activeRef.current.checked = false;
			toast.success("Uus toode lisatud", {
				position: "bottom-right",
				theme: "light",
			});
		});
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
				<select ref={categoryRef} type="text">
					{categories.map((element, i) => (
						<option key={i}>{element.name}</option>
					))}
				</select>
				<br />
				<label>Image</label>
				<br />
				<FileUpload onSendPictureUrl={setImageUrl} />
				{/* <input ref={imageRef} type="text"></input> */}
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
			<ToastContainer />
		</div>
	);
}

export default AddProduct;
