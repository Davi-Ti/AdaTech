import { createContext, useState } from "react";

interface CartContextProps {
	showCart: boolean;
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
	children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [showCart, setShowCart] = useState(false);

	return (
		<CartContext.Provider value={{ showCart, setShowCart }}>
			{children}
		</CartContext.Provider>
	);
};
