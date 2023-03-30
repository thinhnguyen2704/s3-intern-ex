import './App.scss';
import Category from '../src/components/category/Category';
import useProduct from '../src/hooks/useProduct';

function App() {
	const { categories, products } = useProduct();

	return (
		<div className='App'>
			<div className='flex-container'>
				{categories?.map((category: string, index: number) => {
					return (
						<Category key={index} category={category} products={products} />
					);
				})}
			</div>
		</div>
	);
}

export default App;
