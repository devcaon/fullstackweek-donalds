import { ChevronLeftIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext, CartProduct } from "../../contexts/cart";

interface CartItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity } = useContext(CartContext);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* ESQUERDA */}
        <div className="relative h-20 w-20 rounded-xl bg-gray-100/25">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-1">
          <p className="max-w-[90%] truncate text-ellipsis text-xs">
            {product.name}
          </p>
          <p className="text-sm font-semibold">
            {formatCurrency(product.price)}
          </p>
          {/* Quantidade */}
          <div className="flex items-center gap-1 text-center">
            <Button
              variant="outline"
              className="h-7 w-7 rounded-lg"
              onClick={() => decreaseProductQuantity(product.id)}
            >
              <ChevronLeftIcon />
            </Button>
            <p className="w-8 text-xs">{product.quantity}</p>
            <Button variant="destructive" className="h-7 w-7 rounded-lg">
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
      {/* BOTÃO DELETAR */}
      <Button variant="outline" className="h-7 w-7 rounded-lg">
        <Trash2Icon />
      </Button>
    </div>
  );
};

export default CartProductItem;
