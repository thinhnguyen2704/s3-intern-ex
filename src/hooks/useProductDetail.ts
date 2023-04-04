import { useMemo, useState } from 'react'
import useProduct from './useProduct'

interface Product {
  _id: string
  isActive: boolean
  price: string
  picture: string
  category: string
  name: string
}

const useProductDetail = (id: string) => {
  const [productDetail, setProductDetail] = useState<Product>()

  const { products } = useProduct('../../products.json')

  useMemo(() => {
    const productsLength = products.length
    for (let i = 0; i < productsLength; i++) {
      if (products[i]._id === id) setProductDetail(products[i])
    }
  }, [])
  console.log(productDetail)
  return productDetail
}

export default useProductDetail
