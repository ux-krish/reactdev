import React from "react";

export default function Cart({ products = [], handleRemoveProduct }) {
  const hasProductsInCart = products.some(
    (prod) => prod.hasOwnProperty("isCart") && prod?.isCart
  );

  return (
    <div
      className={`bg-slate-700 p-5 w-[350px] shadow-2xl z-10 fixed top-0 bottom-0 transition-all ease-in-out delay-200 ${
        hasProductsInCart ? "right-0" : "-right-[350px]"
      }`}
    >
      <h2 className="text-xl font-bold mb-4 text-white">Shopping Cart</h2>
      {products
        .filter((prod) => prod.hasOwnProperty("isCart") && prod?.isCart)
        .map((product, index) => {
          const { id, name, price } = product;
          return (
            <div key={index} className="text-white mb-4">
              <div className="bg-slate-800 shadow-lg p-4 rounded-md flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-300">{name}</h2>
                <div className="text-xl font-bold text-slate-300 ms-auto me-4">
                  ${price}
                </div>
                <button
                  onClick={() => handleRemoveProduct(id)}
                  className="bg-red-900 w-10 h-10 rounded-md font-bold text-slate-300 hover:bg-slate-950 shadow-lg"
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
