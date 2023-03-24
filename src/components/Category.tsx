import { useEffect, useState } from 'react';

const Category = ({ category, products }: any) => {
	const [productNames, setProductNames] = useState<string[]>([]);

	useEffect(() => {
		let productNamesList = [...productNames];
		for (const product in products) {
			if (products[product].category === category) {
				productNamesList.push(products[product].name);
			}
		}
		setProductNames(productNamesList);
	}, []);

	return (
		<div>
			<h2>{category}</h2>
			{productNames.length > 0 &&
				productNames.map((productName, index) => {
					return <div className='product-names' key={index}>{productName}</div>;
				})}
		</div>
	);
};

export default Category;
