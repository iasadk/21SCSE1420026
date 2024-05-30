import React from 'react'

const ProductCard = (x) => {
    const data = x.data
  return (
    <div className='flex flex-col justify-start border rounded-lg p-2  hover:bg-gray-400/20'>
        <p className='text-lg font-semibold text-left'>{data.productName}</p>
        <div className='flex justify-between mt-5'>
            <p className='font-bold'>{data.price}</p>
            {data.availability == "yes" && <p className='bg-green-400 text-white text-xs rounded-xl h-6 px-2 flex items-center justify-center'>In Stock</p>}
            {data.availability == "out-of-stock" && <p className='bg-red-400 text-white text-xs rounded-xl h-6 px-2 py-1 flex items-center justify-center'>Out of stock</p>}
        </div>
    </div>
  )
}

export default ProductCard