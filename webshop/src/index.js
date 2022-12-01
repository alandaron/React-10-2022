import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./i18n";
import "./index.css";
import { AuthContextProvider } from "./store/AuthContext";
import { CartSumContextProvider } from "./store/CartSumContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthContextProvider>
				<CartSumContextProvider>
					<App />
				</CartSumContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
