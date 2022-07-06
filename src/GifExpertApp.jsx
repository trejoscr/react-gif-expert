import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

	const [categories, setCategories] = useState([ 'Dragon Ball Z' ]);

	const onAddCategory = ( newCategory ) => {
		// categories.push('Los Simpson'); no usar push

		//setCategories( cat => [...cat, 'Los Simpson'] );
		//setCategories([ ...categories, 'Los Simpson']);

		if(categories.includes(newCategory)) return;

		setCategories( [newCategory, ...categories] );
	
	}

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory
				onNewCategory={ value => onAddCategory(value) }
			/>

			{
				categories.map((category) => (
					<GifGrid key={category} category={category}/>
				))
			}


		</>
	);

}
	