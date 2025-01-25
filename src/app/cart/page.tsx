"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const Cartpage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleQuantityChange = (id: string, inventory: number) => {
    updateCartQuantity(id, inventory);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      updateCartQuantity(id, product.quantity + 1);
      setCartItems(getCartItems());
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.quantity > 1) {
      updateCartQuantity(id, product.quantity - 1);
      setCartItems(getCartItems());
    }
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Are you sure you want to proceed to checkout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been processed", "success");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-center justify-between border-b pb-4"
            >
              {/* Item Image and Details */}
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                {item.image && (
                  <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                />
                )
                }
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>

              {/* Quantity Controls and Remove Button */}
              <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-100 rounded-lg">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total and Proceed to Checkout */}
          <div className="mt-8 ">
            <h2 className="text-xl sm:text-2xl font-bold">Total: ${calculatedTotal().toFixed(2)}</h2>
            <button
              onClick={handleProceed}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full sm:w-auto"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartpage;