import { useState, useEffect } from 'react';
import './App.css';
import Category from './components/Category';

interface Product {
	_id: string;
	isActive: boolean;
	price: string;
	picture: string;
	category: string;
	name: string;
}
function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<string[]>([]);

	useEffect(() => {
		fetch('./products.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const tempCategories: string[] = [];
				for (let i = 0; i < data.length; i++) {
					if (!tempCategories.includes(data[i].category)) {
						tempCategories.push(data[i].category);
					}
				}
				setCategories(tempCategories);

				setProducts(data);
			})
			.catch((err: Error) => {
				console.log(err.message);
			});
	}, []);

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
