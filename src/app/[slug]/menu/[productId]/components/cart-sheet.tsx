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
          <SheetTitle className="mb-6 text-left">Minha sacola</SheetTitle>
        </SheetHeader>
        {products.length === 0 && (
          <span className="text-sm italic text-muted-foreground">
            Nenhum produto na sua sacola.
          </span>
        )}
        {products.map((product) => (
          <CartProductItem product={product} key={product.id} />
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
