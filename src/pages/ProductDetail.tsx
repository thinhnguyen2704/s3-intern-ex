import { useMemo } from 'react'
import { useParams } from 'react-router'
import useProduct from '../hooks/useProduct'

const ProductDetail = () => {
  const { id } = useParams()
  const { products } = useProduct('../../products.json')
 
  const productDetail = useMemo(() => {
    const productsLength = products.length;
    for (let i = 0; i < productsLength; i++) {
      if (products[i]._id === id)
        return products[i]
    }
  }, [])

  return (
    <>
      {productDetail && (
        <ul>
          <li>
            Id: {productDetail._id}
          </li>
          <li>
            Name: {productDetail.name}
          </li>
          <li>
            Category: {productDetail.category}
          </li>
          <li>
            Availability: {productDetail.isActive ? '✅' : '❌'}
          </li>
          <li>
            Price: {productDetail.price}
          </li>
          <img src={productDetail.picture} alt={productDetail.name} />
        </ul>
      )}
    </>
  )
}

export default ProductDetail