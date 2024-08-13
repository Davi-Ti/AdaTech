import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";
import { useContext, useState } from "react";
import { Cart } from "../Cart/Cart";
import { CartContext } from "../context/CartContext";

export const Header: React.FC = () => {
	const { showCart, setShowCart } = useContext(CartContext);
	const [isLogged, setIsLogged] = useState(false);
	return (
		<S.StyledHeader>
			<S.Wrapper>
				<S.HeaderTitle>My Shop.</S.HeaderTitle>
				<S.ButtonsWrapper>
					<S.AuthButton
						onClick={() => setIsLogged(!isLogged)}
						isLogged={isLogged}
					>
						{isLogged ? "Logout" : "Login"}
						{isLogged ? <FiLogOut /> : <FiLogIn />}
					</S.AuthButton>
					<S.CartButton onClick={() => setShowCart(!showCart)}>
						Carrinho
						<FiShoppingCart />
					</S.CartButton>
				</S.ButtonsWrapper>
			</S.Wrapper>

			<Cart showCart={showCart} />
		</S.StyledHeader>
	);
};
