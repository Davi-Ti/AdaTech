import styled from "styled-components";

export const StyledHeader = styled.header`
	background-color: navy;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0 2rem;
	max-width: 1240px;
	margin: 0 auto;
	height: 4rem;
`;

export const HeaderTitle = styled.h1`
	color: white;

	font-size: 1.5rem;
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	gap: 1rem;
`;

interface AuthButtonProps {
	$isLogged: boolean;
}
export const AuthButton = styled.button<AuthButtonProps>`
	border: none;
	border-radius: 5px;
	height: 2rem;
	padding: 0 1rem;
	background-color: ${(props) => (props.$isLogged ? "red" : "green")};
	color: white;
	font-size: 0.8rem;

	display: flex;
	align-items: center;
	gap: 0.3rem;

	svg {
		font-size: 0.7rem;
	}
`;

export const CartButton = styled.button`
	border: none;
	border-radius: 5px;
	height: 2rem;
	padding: 0 1rem;
	background-color: violet;
	color: black;
	font-size: 0.8rem;

	display: flex;
	align-items: center;
	gap: 0.3rem;

	svg {
		font-size: 0.7rem;
	}
`;
