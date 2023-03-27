import { useEffect, useState } from 'react';

const Category = ({ category, products }: any) => {
	const [productNames, setProductNames] = useState<string[]>([]);

	useEffect(() => {
		const productNamesList = [...productNames];
		for (const product in products) {
			if (products[product].category === category) {
				productNamesList.push(products[product].name);
			}
		}
		setProductNames(productNamesList);
	}, []);

	return (
		<div>
			<div className='category'>{category}</div>
			{productNames?.map((productName, index) => {
				return (
					<div className='product-name' key={index}>
						{productName}
					</div>
				);
			})}
		</div>
	);
};

export default Category;
