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
		<div className='flex-container'>
			{categories?.map((category: string, index: number) => {
				return <Category key={index} category={category} products={products} />;
			})}
		</div>
	);
};

export default Product;
