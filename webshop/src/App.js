import { Route, Routes } from "react-router-dom";

import "./App.css";

// Boostrap
import Container from "react-bootstrap/Container";

// Pages
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Shops from "./pages/Shops";
import SingleProduct from "./pages/SingleProduct";
import AdminHome from "./pages/admin/AdminHome";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainShops from "./pages/admin/MaintainShops";
import NavigationBar from "./components/NavigationBar";

function App() {
	return (
		<div>
			<NavigationBar />
			<Container fluid>
				<Routes>
					<Route path="" element={<HomePage />} />
					<Route path="cart" element={<Cart />} />
					<Route path="shops" element={<Shops />} />
					<Route path="product" element={<SingleProduct />} />
					<Route path="admin" element={<AdminHome />} />
					<Route path="admin/add-product" element={<AddProduct />} />
					<Route path="admin/edit-product/:id" element={<EditProduct />} />
					<Route
						path="admin/maintain-products"
						element={<MaintainProducts />}
					/>
					<Route
						path="admin/maintain-categories"
						element={<MaintainCategories />}
					/>
					<Route path="admin/maintain-shops" element={<MaintainShops />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
