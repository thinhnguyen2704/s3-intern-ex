import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import './Category.scss'

interface Product {
  _id: string
  isActive: boolean
  price: string
  picture: string
  category: string
  name: string
}

interface Category {
  category: string
  products: Product[]
}

const Category = ({ category, products }: Category) => {
  const productsList = useMemo(() => {
    const tempList: Product[] = []
    const productsLength = products.length
    for (let i = 0; i < productsLength; i++) {
      if (products[i].category === category) {
        tempList.push(products[i])
      }
    }
    return tempList
  }, [])

  return (
    <div>
      <div className='category'>{category}</div>
      {productsList?.map((product, index) => {
        return (
          <Link key={index} className='product-name' to={`/product/${product._id}`}>
            <div>{product.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Category
