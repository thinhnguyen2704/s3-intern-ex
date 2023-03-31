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
				setCategories([
					...new Set<string>(
						productsData.map(
							(product: Product) => product.category
						)
					),
				]);

				setProducts(productsData);
			})
			.catch((err: Error) => {
				console.log(err.message);
			});
	}, []);

	return {
		products,
		setProducts,
		categories,
		setCategories,
	};
};

export default useProduct;
