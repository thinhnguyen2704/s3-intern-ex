import { useState, useEffect } from 'react'
import { Product } from '../components/category/Category'

const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    fetch('./products.json')
      .then((response) => {
        return response.json()
      })
      .then((productsData) => {
        setCategories([
          ...new Set<string>(productsData.map((product: Product) => product.category)),
        ])

        setProducts(productsData)
        throw new Error('An error occurred when fetching data!')
      })
      .catch((err: Error) => {
        console.log(err.message)
      })
  }, [])

  return {
    products,
    setProducts,
    categories,
    setCategories,
  }
}

export default useProduct
