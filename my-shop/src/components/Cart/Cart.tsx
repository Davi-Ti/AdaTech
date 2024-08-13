import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import * as S from "./styles";

interface CartProps {
	showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
	const { setShowCart } = useContext(CartContext);

	return (
		<S.Container showCart={showCart}>
			<S.Title>Carrinho</S.Title>
			<S.CloseButton onClick={() => setShowCart(!showCart)}>
				Fechar
			</S.CloseButton>
		</S.Container>
	);
};
