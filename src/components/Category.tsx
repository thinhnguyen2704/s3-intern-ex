import React, { useEffect, useState } from 'react';

const Category = ({ category, products }: any) => {
	const [productNames, setProductNames] = useState(['']);

	useEffect(() => {
		let productNames = [''];
		productNames.pop();
		console.log(category);
		for (const product in products) {
			if (products[product].category === category) {
				productNames.push(products[product].name);
			}
		}
		setProductNames(productNames);
	}, []);

	return (
		<div>
			<h2>{category}</h2>
			{productNames.map((product, index) => {
				return <div key={index}>{product}</div>;
			})}
		</div>
	);
};

export default Category;
