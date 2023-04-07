import { useParams } from 'react-router-dom'
import useProductDetail from '../hooks/useProductDetail'

const ProductDetail = () => {
  const { id = '' } = useParams()
  const { _id, name, category, isActive, price, picture } = useProductDetail(id) || {}

  return (
    <div>
      {_id && (
        <ul>
          <li>Id: {_id}</li>
          <li>Name: {name}</li>
          <li>Category: {category}</li>
          <li>Availability: {isActive ? '✅' : '❌'}</li>
          <li>Price: {price}</li>
          <img src={picture} alt={name} />
        </ul>
      )}
    </div>
  )
}

export default ProductDetail
