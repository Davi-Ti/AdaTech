import styled from "styled-components";

interface ContainerProps {
	showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
	position: fixed;
	top: 0;
	right: ${(props) => (props.showCart ? "0" : "-350px")};

	width: 350px;
	height: 100vh;
	background-color: white;

	padding: 2rem;
	box-shadow: -5px 0 10px rgba(0, 0, 0, 0.15);

	transition: right 0.5s ease;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 1rem;
	right: 1rem;
`;

export const Title = styled.h1``;
