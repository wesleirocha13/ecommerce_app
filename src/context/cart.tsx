import React, { createContext, ReactNode, useState } from  'react';
import { ProductProps } from '../../types'

type CartProviderProps = {
  children: ReactNode
}

export type CartContextProps = {
  productsInCart: ProductProps[];
  addProductInCart: Function;
  removeProductFromCart: Function;
  increaseAmountOfProduct: Function;
  decreaseAmountOfProduct: Function
}

const CartContext = createContext<CartContextProps | null>(null);

export const CartProvider = ({children} : CartProviderProps) => {
  const [productsInCart, setProductsInCart] = useState<ProductProps[]>([]);

  //Adiciona um produto no carrinho
  const addProductInCart = (product : ProductProps)=>{
    const hasProduct = !!productsInCart.find(productInCart => productInCart.id === product.id);
    if(hasProduct){
      const newListProduct = productsInCart.map((productInCart)=>{
        if(productInCart.id === product.id){
          productInCart.quantityInCart = productInCart.quantityInCart ? productInCart.quantityInCart+1 : 1;
        }
        return productInCart;
      })
      setProductsInCart(newListProduct);
    }else{
      setProductsInCart([...productsInCart, {...product, quantityInCart: 1}]);
    }
  }

  // Remove um produto do carrainho
  const removeProductFromCart = (idProduct : number)=>{
    const updatedProducts = productsInCart.filter(product => product.id !== idProduct);
    setProductsInCart(updatedProducts);
  }

  //Aumenta a quantidade de um produto no carrinho
  const increaseAmountOfProduct = (idProduct : number)=>{
    const newListProduct = productsInCart.map((productInCart)=>{
      if(productInCart.id === idProduct){
        productInCart.quantityInCart = productInCart.quantityInCart ? productInCart.quantityInCart+1 : 1;
      }
      return productInCart
    })
    setProductsInCart(newListProduct);
  }

  //Diminui a quantidade de um produto no carrinho
  const decreaseAmountOfProduct = (idProduct : number)=>{
    const newListProduct = productsInCart.map((productInCart)=>{
      if(productInCart.id === idProduct){
        productInCart.quantityInCart = productInCart.quantityInCart ? productInCart.quantityInCart-1 : productInCart.quantityInCart;
      }
      return productInCart
    })
    setProductsInCart(newListProduct);
  }

  return (
    <CartContext.Provider value={{productsInCart, addProductInCart, removeProductFromCart, increaseAmountOfProduct, decreaseAmountOfProduct}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
