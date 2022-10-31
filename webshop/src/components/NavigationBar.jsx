import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
	const { t, i18n } = useTranslation();

	const changeLang = (lang) => {
		i18n.changeLanguage(lang);
		localStorage.setItem("language", lang);
	};

	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand as={NavLink} to="/">
					Webshop
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link as={NavLink} to="/admin">
						{t("admin")}
					</Nav.Link>
					<Nav.Link as={NavLink} to="/shops">
						{t("shops")}
					</Nav.Link>
					<Nav.Link as={NavLink} to="/cart">
						{t("cart")}
					</Nav.Link>
				</Nav>
				<img
					onClick={() => changeLang("est")}
					src={require("../images/estonia.png")}
					alt="estonian"
					className="language-flag"
				/>
				<img
					onClick={() => changeLang("eng")}
					src={require("../images/united-kingdom.png")}
					alt="english"
					className="language-flag"
				/>
				<img
					onClick={() => changeLang("tur")}
					src={require("../images/turkey.png")}
					alt="turkish"
					className="language-flag"
				/>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
