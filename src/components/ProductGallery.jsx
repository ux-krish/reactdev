import React from 'react'

export default function ProductGallery({ products = [], handleAddProduct }) {
  return (

    <div className='gap-4 col-span-2 grid grid-cols-2  md:grid-cols-3 lg:w-[calc(100% - 600px)]'>
      {products.filter((prod) => !prod.hasOwnProperty('isCart') || (prod.hasOwnProperty('isCart') &&!prod?.isCart)).map((product, index) => {
        const { id, name, price, description } = product;
        return (
          <div key={index}>
            <div className="bg-slate-700 shadow-lg p-4 rounded-md grid grid-col-3">
              <h2 className="text-xl font-bold mb-2 text-slate-300">{name}</h2>
              <p className="text-slate-300 font-bold ">${price}</p>
              <p className="text-slate-400 mt-2 mb-5">{description}</p>
              <button onClick={() => handleAddProduct(id)} className='bg-slate-600 py-2 px-6 rounded-md font-bold text-slate-300 hover:bg-slate-950 shadow-lg'>Add to cart</button>
            </div>
          </div>

        )
      })}
    </div>

  )
}
