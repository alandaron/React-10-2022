import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

// Bootstrap
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthContext from "../../store/AuthContext";
import CartSumContext from "../../store/CartSumContext";

function NavigationBar() {
	const { t, i18n } = useTranslation();
	const cartSumCtx = useContext(CartSumContext);
	const authContext = useContext(AuthContext);

	const changeLang = (lang) => {
		i18n.changeLanguage(lang);
		localStorage.setItem("language", lang);
	};

	const logout = () => {
		authContext.logout();
	};

	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand as={NavLink} to="/">
					Webshop
				</Navbar.Brand>
				<Nav className="me-auto">
					{authContext.loggedIn && (
						<Nav.Link as={NavLink} to="/admin">
							{t("nav.admin")}
						</Nav.Link>
					)}

					<Nav.Link as={NavLink} to="/shops">
						{t("nav.shops")}
					</Nav.Link>
					<Nav.Link as={NavLink} to="/cart">
						{t("nav.cart")}
					</Nav.Link>

					{!authContext.loggedIn && (
						<>
							<Nav.Link as={NavLink} to="/login">
								{t("login")}
							</Nav.Link>
							<Nav.Link as={NavLink} to="/signup">
								{t("signup")}
							</Nav.Link>
						</>
					)}
					{authContext.loggedIn && (
						<Nav.Link onClick={logout}>{t("logout")}</Nav.Link>
					)}
				</Nav>
				<div style={{ color: "white" }}>{cartSumCtx.cartSum} €</div>
				<img
					onClick={() => changeLang("est")}
					src={require("../../images/estonia.png")}
					alt="estonian"
					className="language-flag"
				/>
				<img
					onClick={() => changeLang("eng")}
					src={require("../../images/united-kingdom.png")}
					alt="english"
					className="language-flag"
				/>
				<img
					onClick={() => changeLang("tur")}
					src={require("../../images/turkey.png")}
					alt="turkish"
					className="language-flag"
				/>
				<img
					onClick={() => changeLang("tur")}
					src={require("../../images/germany.png")}
					alt="germany"
					className="language-flag"
				/>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
