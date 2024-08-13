import React, { FormEvent, useRef } from "react";
import styles from "./styles.module.scss";

export const Refs: React.FC = () => {
	const inputNameRef = useRef<HTMLInputElement>(null);
	const inputEmailRef = useRef<HTMLInputElement>(null);
	const inputPasswordRef = useRef<HTMLInputElement>(null);

	function handleOnSubmit(event: FormEvent) {
		event.preventDefault();

		console.log(inputNameRef.current?.value);
		console.log(inputEmailRef.current?.value);
		console.log(inputPasswordRef.current?.value);
	}

	return (
		<form
			className={styles.container}
			onSubmit={(event) => handleOnSubmit(event)}
		>
			<h1>useRef</h1>

			<br />
			<input type="text" ref={inputNameRef} placeholder="Nome Completo" />
			<input type="email" ref={inputEmailRef} placeholder="E-mail" />
			<input type="password" ref={inputPasswordRef} placeholder="Senha" />
			<br />
			<button type="submit">Submeter</button>
		</form>
	);
};
