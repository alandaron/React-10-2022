import { Route, Routes } from "react-router-dom";

import "./App.css";

// Boostrap
import Container from "react-bootstrap/Container";

// Pages
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import AddProduct from "./pages/admin/AddProduct";
import AdminHome from "./pages/admin/AdminHome";
import EditProduct from "./pages/admin/EditProduct";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Shops from "./pages/Shops";
import SingleProduct from "./pages/SingleProduct";

function App() {
	return (
		<div>
			<NavigationBar />
			<Container fluid>
				<Routes>
					<Route path="" element={<HomePage />} />
					<Route path="contact" element={<Contact />} />
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

			<Footer />
		</div>
	);
}

export default App;
