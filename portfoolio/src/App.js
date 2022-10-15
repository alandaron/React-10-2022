import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import Kontakt from "./pages/Kontakt";
import Minust from "./pages/Minust";

function App() {
	return (
		<div className="App">
			<div className="nav">
				<img src="/logo.png" alt="logo" />
				<div className="links">
					<ul>
						<Link to="/">
							<li>Avaleht</li>
						</Link>
						<Link to="/minust">
							<li>Kes ma olen?</li>
						</Link>
						<Link to="/kontakt">
							<li>Võta ühendust</li>
						</Link>
					</ul>
				</div>
			</div>
			<div className="container">
				<div className="main">
					<Routes>
						<Route path="" element={<Avaleht />} />
						<Route path="minust" element={<Minust />} />
						<Route path="kontakt" element={<Kontakt />} />
					</Routes>
				</div>
				<div className="work">
					<div className="work-heading">Minu tööd</div>
					<div className="work-pictures">
						<Link to="/work">
							<img
								src="https://media.moddb.com/images/members/5/4550/4549205/dog.jpg"
								alt="work"
							/>
						</Link>
						<Link to="/hobbies">
							<img
								src="https://img-9gag-fun.9cache.com/photo/a3Q5VW5_460s.jpg"
								alt="hobbies"
							/>
						</Link>
						<Link to="/courses">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMgz69Vu2ADKI0ywdKy9NDvp8hhpwZg6gZA&usqp=CAU"
								alt="courses"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
