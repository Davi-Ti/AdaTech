import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";
import { useContext } from "react";
import { Cart } from "../Cart/Cart";
import { CartContext } from "../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {
	const { user } = useSelector(
		(rootReducer: RootReducer) => rootReducer.userReducer
	);
	const dispatch = useDispatch();

	const { showCart, setShowCart } = useContext(CartContext);
	const isLogged = user !== null;

	function handleUserAuth() {
		if (user === null) {
			dispatch(
				login({
					name: "davi",
					email: "davi@email",
				})
			);
		} else {
			dispatch(logout());
		}
	}

	return (
		<S.StyledHeader>
			<S.Wrapper>
				<S.HeaderTitle>My Shop.</S.HeaderTitle>
				<S.ButtonsWrapper>
					<S.AuthButton onClick={handleUserAuth} $isLogged={isLogged}>
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
