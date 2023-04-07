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
      })
      .catch((err: Error) => {
        throw err
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
