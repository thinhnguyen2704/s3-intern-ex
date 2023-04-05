import { useEffect, useState } from 'react'
import { Product } from '../components/category/Category'

const useProductDetail = (id: string) => {
  const [productDetail, setProductDetail] = useState<Product>()

  useEffect(() => {
    fetch('../../products.json')
      .then((response) => {
        return response.json()
      })
      .then((productsData) => {
        const productsLength = productsData.length
        let tempProduct: Product = productsData[0]
        for (let i = 0; i < productsLength; i++) {
          if (productsData[i]._id === id) {
            tempProduct = productsData[i]
          }
        }
        setProductDetail(tempProduct)
      })
      .catch((err: Error) => {
        console.log(err.message)
      })
  }, [])
  return productDetail
}

export default useProductDetail
