const caloriesData = {
	egg: { calories: 105, carbs: 42, fat: 1 },
	milk: { calories: 52, carbs: 33, fat: 4 },
	butter: { calories: 237, carbs: 2, fat: 21 },
	flour: { calories: 34, carbs: 83, fat: 6 },
	cream: { calories: 223, carbs: 3, fat: 44 }
}

export function getFoodNutrition(value) {
	const initials = {
		calories: {
			label: 'Calories',
			unit: 'kcal',
			value: 0,
		},
		carbs: {
			label: 'Carbs',
			unit: 'gr',
			value: 0,
		},
		fat: {
			label: 'Fat',
			unit: 'gr',
			value: 0,
		},
	}

	// Convert list string value to array
	/**
	* @type string[]
	*/
	const strippedValue = value.split('</li>').map(item => item.replace(/<\/?li\>/, ''));

	// Loop over the caloriesData keys
	return Object.keys(caloriesData)
		// filter keys that are in the value (entries)
		.filter(key => strippedValue.filter(ingredient=>ingredient === key).length)
		// Calculate sum of calories, carbs, fat
		.reduce((acc, curr) => {
			acc.calories.value += caloriesData[curr].calories;
			acc.carbs.value += caloriesData[curr].carbs;
			acc.fat.value += caloriesData[curr].fat;
			return acc;
		}, initials);
};
