import { useMemo, useState } from 'react';
import './Category.scss';

const Category = ({ category, products }: any) => {
	const [productNames, setProductNames] = useState<string[]>([]);

	const productNamesList = useMemo(() => {
		const tempList: string[] = [];
		const productsLength = products.length;
		for (let i = 0; i < productsLength; i++) {
			if (products[i].category === category) {
				tempList.push(products[i].name);
			}
		}
		setProductNames(tempList);
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
