import React from 'react';

interface PropsType {
	category: string;
	// productName: string;
}

const Category = ({ category }: PropsType) => {
	return (
		<>
			<li>{category}</li>
		</>
	);
};

export default Category;
