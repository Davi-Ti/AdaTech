import React from "react";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { addProduct, removeProduct } from "../../redux/Cart/cart-slice";

interface ProductCardProps {
	product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const { cart } = useSelector(
		(rootReducer: RootReducer) => rootReducer.cartReducer
	);
	const dispatch = useDispatch();

	const isProductInCart =
		cart.find((productOnCart) => productOnCart.id === product.id) !==
		undefined;
	function handleAddProductToCart() {
		dispatch(addProduct(product));
	}

	function handleRemoveProductFromCart() {
		dispatch(removeProduct(product));
	}

	return (
		<S.Card>
			<S.ProductImage src={product.image} alt={product.description} />
			<S.ProductTitle>{product.title}</S.ProductTitle>
			<S.ReviewPriceContainer>
				<S.Review>
					{Array.from({ length: 5 }).map((_, index) =>
						index < Math.round(product.rating.rate) ? (
							<AiFillStar key={index} />
						) : (
							<AiOutlineStar key={index} />
						)
					)}
					({` ${product.rating.rate}`})
				</S.Review>
				<S.Price> ${product.price}</S.Price>
			</S.ReviewPriceContainer>
			<S.addToCartButtonWrapper>
				{isProductInCart ? (
					<S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
						Remover do Carrinho
						<FiShoppingCart />
					</S.RemoveFromCartButton>
				) : (
					<S.addToCartButton onClick={handleAddProductToCart}>
						Adicionar ao Carrinho
						<FiShoppingCart />
					</S.addToCartButton>
				)}
			</S.addToCartButtonWrapper>
		</S.Card>
	);
};
