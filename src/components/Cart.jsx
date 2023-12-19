import React from 'react'

export default function Cart({cart, handleRemoveProduct}) {
  return (
    <div className=' bg-slate-700 p-5 rounded-md  col-span-1 lg:w-[600px] md:min-h-[80vh] mt-4 lg:mt-0'>
        <h2 className="text-xl font-bold mb-4 text-white">Shopping Cart</h2>
        {cart.length > 0 ? (
            cart.map((cartProduct) => (
            <div key={cartProduct.id} className="text-white mb-4">
                <div key={cartProduct.id} className="bg-slate-800 shadow-lg p-4 rounded-md flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-300">{cartProduct.name}</h2>
                <div className="text-xl font-bold text-slate-300 ms-auto me-4">${cartProduct.price}</div>
                <button onClick={() => handleRemoveProduct(cartProduct.id)} className='bg-red-900 w-10 h-10 rounded-md font-bold text-slate-300 hover:bg-slate-950 shadow-lg'>X</button>
                </div>
            </div>
            ))
        ) : (
            <p className="text-slate-300">No items in the cart!</p>
        )}
    </div>
  )
}
