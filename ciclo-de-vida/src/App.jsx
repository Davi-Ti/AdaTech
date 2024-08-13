import React, { Component } from "react";
import { Counter } from "./components/Counter/Counter";

export class App extends Component {
	constructor() {
		super();
		this.state = {
			showCounter: false,
		};
	}

	render() {
		return (
			<div className="App">
				<h1>Ciclo de Vida no React</h1>

				<button
					onClick={() =>
						this.setState({ showCounter: !this.state.showCounter })
					}
				>
					{this.state.showCounter
						? "Esconder o Contador"
						: "Mostrar o Contador"}
				</button>

				{this.state.showCounter && <Counter />}
			</div>
		);
	}
}
