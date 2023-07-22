import { useRouter } from 'next/router'
import React from 'react'

function ProductDetails() {
    const router =useRouter()
  return (
    <div>Product Details : {router.query.productId}</div>
  )
}

export default ProductDetails