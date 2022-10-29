import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Kasutajad from "./pages/Kasutajad";
import Tagasiside from "./pages/Tagasiside";
import TagasideAndja from "./pages/TagasisideAndja";

function App() {
	return (
		<div className="App">
			<Link to="/">
				<button>Avaleht</button>
			</Link>
			<Link to="/tagasiside">
				<button>Tagasiside</button>
			</Link>
			<Link to="/tagasiside-andja">
				<button>Tagasiside andja</button>
			</Link>
			<Link to="/kasutajad">
				<button>Kasutajad</button>
			</Link>

			<Routes>
				<Route path="" element={<div>Tere</div>} />
				<Route path="tagasiside" element={<Tagasiside />} />
				<Route path="tagasiside-andja" element={<TagasideAndja />} />
				<Route path="kasutajad" element={<Kasutajad />} />
			</Routes>
		</div>
	);
}

export default App;
