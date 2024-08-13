import { CartProvider } from "./components/context/CartContext";
import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductsList/ProductList";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
	return (
		<>
			<CartProvider>
				<Header />
				<ProductList />
			</CartProvider>
			<GlobalStyles />
		</>
	);
}

export default App;
