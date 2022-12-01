function SortButtons({ products, setProducts }) {
	// sorteerimine .sort localeCompare
	// võtame kõik kategooriad toodete küljest ja kuvame need
	// .filter kategooriaid

	const sortAZ = () => {
		// ["guitar", "drum"].sort();
		products.sort((a, b) => a.name.localeCompare(b.name));
		setProducts(products.slice());
	};

	const sortZA = () => {
		//1.  products.sort((a,b) => a.name.localeCompare(b.name)).reverse();
		//2.  products.sort((a,b) => -1 * a.name.localeCompare(b.name));
		products.sort((a, b) => b.name.localeCompare(a.name));
		setProducts(products.slice());
	};

	const sortPriceAsc = () => {
		products.sort((a, b) => a.price - b.price);
		setProducts(products.slice());
	};

	const sortPriceDesc = () => {
		products.sort((a, b) => b.price - a.price);
		setProducts(products.slice());
	};

	return (
		<>
			<button onClick={sortAZ}>Sorteeri A-Z</button>
			<button onClick={sortZA}>Sorteeri Z-A</button>
			<button onClick={sortPriceAsc}>Sorteeri hind kasvavalt</button>
			<button onClick={sortPriceDesc}>Sorteeri hind kahanevalt</button>
		</>
	);
}

export default SortButtons;
