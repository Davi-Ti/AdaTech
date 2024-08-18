import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

describe("Cart unit tests", () => {
	it("should render correctly", () => {
		render(
			<Provider store={store}>
				<Cart showCart={true} />
			</Provider>
		);

		const titleElement = screen.getByRole("heading", {
			level: 1,
		});
		const totalElement = screen.getByTestId("total");
		const cartListElement = screen.getByRole("list");

		expect(titleElement).toHaveTextContent("Carrinho");
		expect(totalElement).toHaveTextContent("$0");
		expect(cartListElement).toBeEmptyDOMElement();
	});

	it("should render a cart with two products", () => {
		render(
			<Provider store={store}>
				<Cart showCart={true} />
			</Provider>
		);
	});
});
