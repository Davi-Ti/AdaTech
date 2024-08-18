import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { removeProduct } from "../../redux/Cart/cart-slice";

interface CartProps {
	showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
	const { setShowCart } = useContext(CartContext);

	const { cart } = useSelector(
		(rootReducer: RootReducer) => rootReducer.cartReducer
	);

	const dispatch = useDispatch();

	const total = cart.reduce((totalCart, product) => {
		return totalCart + product.price;
	}, 0);

	return (
		<S.Container $showCart={showCart}>
			<S.Title>Carrinho</S.Title>
			<S.CloseButton onClick={() => setShowCart(!showCart)}>
				Fechar
			</S.CloseButton>
			<S.CartProductsList>
				{cart.map((product) => (
					<S.CartProductItem key={product.id}>
						<strong>{product.title}</strong> - ${product.price}
						<button onClick={() => dispatch(removeProduct(product))}>
							Remover do carrinho
						</button>
					</S.CartProductItem>
				))}
			</S.CartProductsList>

			<S.CartTotal>Total: ${total}</S.CartTotal>
		</S.Container>
	);
};
