import React from 'react';

const Product = () => {
	let products;

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

	return <div>Product</div>;
};

export default Product;
