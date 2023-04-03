import Category from '../components/category/Category'
import useProduct from '../hooks/useProduct'

const Home = () => {
  const { categories, products } = useProduct('./products.json')

  return (
    <div className="flex-container">
      {categories?.map((category: string, index: number) => {
        return <Category key={index} category={category} products={products} />
      })}
    </div>
  )
}

export default Home