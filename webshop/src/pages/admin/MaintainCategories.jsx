import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import config from "../../data/config.json";

function MaintainCategories() {
	const [categories, setCategories] = useState([]);
	const categoryRef = useRef();
	const { t } = useTranslation();

	useEffect(() => {
		fetch(config.categoriesDbUrl)
			.then((res) => res.json())
			.then((json) => {
				setCategories(json || []);
			});
	}, []);

	const addNewCategory = () => {
		// keyUp - enter vajutus

		categories.push({ name: categoryRef.current.value });

		fetch(config.categoriesDbUrl, {
			method: "PUT",
			body: JSON.stringify(categories),
		}).then(() => {
			categoryRef.current.value = "";
			setCategories([...categories]);
			toast.success("Uus kategooria lisatud", {
				position: "bottom-right",
				theme: "light",
			});
		});
	};

	const deleteCategory = (categoryIndex) => {
		const updatedCategory = [...categories];
		updatedCategory.splice(categoryIndex, 1);
		fetch(config.categoriesDbUrl, {
			method: "PUT",
			body: JSON.stringify(updatedCategory),
		}).then(() => {
			categories.splice(categoryIndex, 1);
			setCategories(updatedCategory);
			toast.success("Toode kustutatud", {
				position: "bottom-right",
				theme: "light",
			});
		});
	};

	return (
		<div>
			<label>Kategooria</label>
			<br />
			<input ref={categoryRef} type="text" />
			<br />
			<Button onClick={addNewCategory}>Lisa kategooria</Button>
			{categories.map((element, i) => (
				<div key={i}>
					<div>
						{t(element.name)}
						<Button variant="danger" onClick={() => deleteCategory(i)}>
							X
						</Button>
					</div>
				</div>
			))}
			<ToastContainer />
		</div>
	);
}

export default MaintainCategories;
