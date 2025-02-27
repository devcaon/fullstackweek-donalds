import { useContext } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { CartContext } from "../../contexts/cart";
import CartProductItem from "./cart-product-item";

const CartSheet = () => {
  const { isOpen, toogleCart, products } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toogleCart}>
      <SheetContent className="w-[85%] space-y-5">
        <SheetHeader>
          <SheetTitle className="text-left">Minha sacola</SheetTitle>
        </SheetHeader>
        {products.map((product) => (
          <CartProductItem product={product} key={product.id} />
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
