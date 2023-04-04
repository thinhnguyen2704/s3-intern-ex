import { useParams } from 'react-router-dom'
import useProductDetail from '../hooks/useProductDetail'

const ProductDetail = () => {
  const { id } = useParams()
  const productDetail = useProductDetail(id!)

  return (
    <div>
      {productDetail && (
        <ul>
          <li>Id: {productDetail._id}</li>
          <li>Name: {productDetail.name}</li>
          <li>Category: {productDetail.category}</li>
          <li>Availability: {productDetail.isActive ? '✅' : '❌'}</li>
          <li>Price: {productDetail.price}</li>
          <img src={productDetail.picture} alt={productDetail.name} />
        </ul>
      )}
    </div>
  )
}

export default ProductDetail
