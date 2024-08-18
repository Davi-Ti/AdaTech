import { Provider } from "react-redux";
import { CartProvider } from "./components/context/CartContext";
import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductsList/ProductList";
import { GlobalStyles } from "./styles/GlobalStyles";
import { store } from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<CartProvider>
				<Header />
				<ProductList />
			</CartProvider>
			<GlobalStyles />
		</Provider>
	);
}

export default App;
