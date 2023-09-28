import { CartProvider } from "./cartItem/page";



export function GlobalProvider({ children}) {
    return<CartProvider>{children}</CartProvider>
}