import { useEffect, useState } from 'react'
import { Product } from '../components/category/Category'

const useProductDetail = (id: string, url: string) => {
  const [productDetail, setProductDetail] = useState<Product>()

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((productsData) => {
        const productsLength = productsData.length
        for (let i = 0; i < productsLength; i++) {
          if (productsData[i]._id === id) setProductDetail(productsData[i])
        }
      })
      .catch((err: Error) => {
        console.log(err.message)
      })
  }, [])
  return productDetail
}

export default useProductDetail
