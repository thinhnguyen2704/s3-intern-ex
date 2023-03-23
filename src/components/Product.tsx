import React, { Fragment, useEffect, useState } from 'react';
import Category from './Category';

interface ProductsJson {
	_id: string;
	isActive: boolean;
	price: string;
	picture: string;
	category: string;
	name: string;
}

const Product = () => {
	const [products, setProducts] = useState<ProductsJson>();
	const [categories, setCategories] = useState(['']);

	useEffect(() => {
		const fetchFromJson = async () => {
			await fetch('./products.json')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					let tempCategories = [''];
					tempCategories.pop();
					for (const product in data) {
						if (!tempCategories.includes(data[product].category)) {
							tempCategories.push(data[product].category);
							setCategories(tempCategories);
						}
					}
					setProducts(data);
				})
				.catch((err: Error) => {
					console.log(err.message);
				});
		};

		fetchFromJson();
	}, []);

	return (
		<div className='flex-container'>
			{categories.length > 0 &&
				categories.map((category, index: any) => {
					console.log(category);
					return (
						<Category key={index} category={category} products={products} />
					);
				})}
		</div>
	);
};

export default Product;
