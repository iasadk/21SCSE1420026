import React from 'react'

const ProductCard = (x) => {
    const data = x.data
  return (
    <div className='flex flex-cols border rounded-lg'>
        <p className='text-lg font-semibold'>{data.productName}</p>
        <div>
            <p className='font-bold'>{data.price}</p>
        </div>
    </div>
  )
}

export default ProductCard