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
    <div>
      {productDetail && (
        <div>
          <div>
            Id: {productDetail._id}
          </div>
          <div>
            Name: {productDetail.name}
          </div>
          <div>
            Category: {productDetail.category}
          </div>
          <div>
            Availability: {productDetail.isActive ? '✅' : '❌'}
          </div>
          <div>
            Price: {productDetail.price}
          </div>
          <img src={productDetail.picture} alt={productDetail.name} />
        </div>
      )}
    </div>
  )
}

export default ProductDetail