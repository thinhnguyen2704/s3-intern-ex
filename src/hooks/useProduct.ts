import { useState, useEffect } from 'react';

interface Product {
	_id: string;
	isActive: boolean;
	price: string;
	picture: string;
	category: string;
	name: string;
}

const useProduct = () => {
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

	const product = {
		products: products,
		setProducts: setProducts,
		categories: categories,
		setCategories: setCategories,
	};

	return product;
};

export default useProduct;
