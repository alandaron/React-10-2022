import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

// Boostrap
import Container from "react-bootstrap/Container";

// Pages
import { useContext } from "react";
import Footer from "./components/global/Footer";
import NavigationBar from "./components/global/NavigationBar";
import AddProduct from "./pages/admin/AddProduct";
import AdminHome from "./pages/admin/AdminHome";
import EditProduct from "./pages/admin/EditProduct";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Shops from "./pages/Shops";
import Signup from "./pages/Signup";
import SingleProduct from "./pages/SingleProduct";
import AuthContext from "./store/AuthContext";

function App() {
	const authContext = useContext(AuthContext);

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
					{!authContext.loggedIn && (
						<>
							<Route path="login" element={<Login />} />
							<Route path="signup" element={<Signup />} />
						</>
					)}
					{authContext.loggedIn && (
						<>
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
						</>
					)}

					{!authContext.loggedIn && (
						<Route path="admin/*" element={<Navigate to="/login" />} />
					)}
					{authContext.loggedIn && (
						<>
							<Route path="/login" element={<Navigate to="/admin" />} />
							<Route path="/signup" element={<Navigate to="/admin" />} />
						</>
					)}
				</Routes>
			</Container>

			<Footer />
		</div>
	);
}

export default App;
