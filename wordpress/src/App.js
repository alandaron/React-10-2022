import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import PaymentCompleted from "./pages/PaymentCompleted";

function App() {
	return (
		<div>
			<div>
				<NavLink to="">Home</NavLink>
				<span> - </span>
				<NavLink to="/cart">Cart</NavLink>
			</div>
			<Routes>
				<Route path="" element={<Home />} />
				<Route path="cart" element={<Cart />} />
				<Route path="order" element={<PaymentCompleted />} />
			</Routes>
		</div>
	);
}

export default App;
