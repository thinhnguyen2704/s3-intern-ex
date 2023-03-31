import { useMemo } from 'react';
import './Category.scss';

const Category = ({ category, products }: any) => {

	const productNamesList = useMemo(() => {
		const tempList: string[] = [];
		const productsLength = products.length;
		for (let i = 0; i < productsLength; i++) {
			if (products[i].category === category) {
				tempList.push(products[i].name);
			}
		}
		return tempList;
	}, []);

	return (
		<div>
			<div className='category'>{category}</div>
			{productNamesList?.map((productName, index) => {
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
