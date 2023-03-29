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
			.then((productsData) => {
				const tempCategories: string[] = [];
				const productsDataLength = productsData.length;
				for (let i = 0; i < productsDataLength; i++) {
					if (!tempCategories.includes(productsData[i].category)) {
						tempCategories.push(productsData[i].category);
					}
				}
				setCategories(tempCategories);

				setProducts(productsData);
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
