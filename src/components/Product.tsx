import { useEffect, useState } from 'react';
import Category from './Category';

interface Product {
	_id: string;
	isActive: boolean;
	price: string;
	picture: string;
	category: string;
	name: string;
}

const Product = () => {
	const [products, setProducts] = useState<Product>();
	const [categories, setCategories] = useState<string[]>([]);

	useEffect(() => {
		fetch('./products.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				let tempCategories = [...categories];
				for (const product in data) {
					if (!tempCategories.includes(data[product].category)) {
						tempCategories.push(data[product].category);
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
		<div className='flex-container'>
			{categories?.map((category, index: any) => {
				return <Category key={index} category={category} products={products} />;
			})}
		</div>
	);
};

export default Product;
