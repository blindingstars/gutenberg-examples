/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { getFoodNutrition } from '../utils/getNutritionData';

const NutritionalData = ({ ingredients }) => {
	if (!ingredients) {
		return null;
	}

	const nutritionalData = getFoodNutrition(ingredients);

	return (
		<dl className="nutritional-data">
			{Object.entries(nutritionalData).map(([key, item]) => (
				<div key={key}>
					<dt>{item.label}:</dt>
					{' '}
					<dd>{item.value}{item.unit}</dd>
				</div>
			))}
		</dl>
	);
};

export default NutritionalData;
