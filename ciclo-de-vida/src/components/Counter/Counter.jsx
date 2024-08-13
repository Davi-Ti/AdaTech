import React from "react";

export class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
		console.log("construindo a classe");
	}

	UNSAFE_componentWillMount() {
		console.log("componente vai ser montado");
	}

	componentDidMount() {
		console.log("componente foi montado");
		document.addEventListener("scroll", this.consoleScroll);
	}

	shouldComponentUpdate() {
		if (this.state.count === 2) {
			return false;
		} else return true;
	}

	UNSAFE_componentWillUpdate() {
		console.log("componente vai ser atualizado");
	}

	componentDidUpdate() {
		console.log("componente foi atualizado");
	}

	componentWillUnmount() {
		console.log("componente vai ser desmontado");

		document.removeEventListener("scroll", this.consoleScroll);
	}

	consoleScroll() {
		console.log("rolando a página");
	}

	render() {
		console.log("renderizando o componente");
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button
					onClick={() => this.setState({ count: this.state.count - 1 })}
				>
					Diminuir
				</button>
				<button
					onClick={() => this.setState({ count: this.state.count + 1 })}
				>
					Aumentar
				</button>
			</div>
		);
	}
}
