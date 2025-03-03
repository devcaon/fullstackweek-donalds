import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../../contexts/cart";
import CartProductItem from "./cart-product-item";

const CartSheet = () => {
  const { isOpen, toogleCart, products, total } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toogleCart}>
      <SheetContent className="w-[85%]">
        <SheetHeader>
          <SheetTitle className="text-left">Minha sacola</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col py-5">
          <div className="flex-auto">
            {products.length === 0 && (
              <p className="text-sm italic text-muted-foreground">
                Nenhum produto na sua sacola.
              </p>
            )}
            {products.map((product) => (
              <CartProductItem product={product} key={product.id} />
            ))}
          </div>
          <Card className="mb-6">
            <CardContent className="p-5">
              <div className="flex justify-between text-sm text-muted-foreground">
                <p>Total</p>
                <p className="font-semibold">{formatCurrency(total)}</p>
              </div>
            </CardContent>
          </Card>
          <Button className="w-full rounded-full">Finalizar Pedido</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
