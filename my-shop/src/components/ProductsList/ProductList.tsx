import { ProductCard } from "../ProductCards/ProductCard";
import * as S from "./Styles";
import { products } from "../../data/products";

export const ProductList: React.FC = () => {
	return (
		<>
			<S.Container>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</S.Container>
		</>
	);
};
