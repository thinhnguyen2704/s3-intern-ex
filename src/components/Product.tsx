import React, { useEffect, useState } from 'react';
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
	let products: any;
	let categories: any;

	const fetchFromJson = () => {
		fetch('./products.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				products = data;
			})
			.catch((err: Error) => {
				console.log(err.message);
			});
	};

	useEffect(() => {
		fetchFromJson();
		console.log(products);
		// for (let index = 0; index < products.length; index++) {
		// 	categories.push(products[index].category);
		// }
		// console.log(categories);
	}, []);

	return (
		<div>
			{/* {categories.map((category: any) => {
				return <Category category={category} />;
			})} */}
		</div>
	);
};

export default Product;
