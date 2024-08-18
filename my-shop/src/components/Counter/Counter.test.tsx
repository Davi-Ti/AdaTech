import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
	it("should render Counter component correctly", async () => {
		render(<Counter />);

		const counterValueElement = await screen.findByRole("heading", {
			level: 1,
		});
		const increaseButtonElement = screen.getByRole("button", {
			name: "Aumentar",
		});
		const decreaseButtonElement = screen.getByRole("button", {
			name: "Diminuir",
		});

		expect(counterValueElement).toHaveTextContent("0");
		expect(increaseButtonElement).toBeInTheDocument();
		expect(decreaseButtonElement).toBeInTheDocument();
	});

	it("should increase and decrease the counter value", () => {
		render(<Counter />);
		const counterValueElement = screen.getByRole("heading", { level: 1 });
		const increaseButtonElement = screen.getByRole("button", {
			name: "Aumentar",
		});
		const decreaseButtonElement = screen.getByRole("button", {
			name: "Diminuir",
		});

		userEvent.click(increaseButtonElement);
		userEvent.click(increaseButtonElement);
		userEvent.click(decreaseButtonElement);

		expect(counterValueElement).toHaveTextContent("1");
	});
});
