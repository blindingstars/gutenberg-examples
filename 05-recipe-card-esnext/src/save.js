/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import NutritionalData from './components/NutritionalData';

const Save = ( props ) => {
	const {
		attributes: { title, mediaURL, ingredients, instructions },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps }>
			<RichText.Content tagName="h1" value={ title } className="recipe-title" />

			{ mediaURL && (
				<img
					className="recipe-image"
					src={ mediaURL }
					alt={ __( 'Recipe Image', 'gutenberg-examples' ) }
				/>
			)}

			<dl className="cooking-time">
				<div>
					<dt>Prep Time</dt>
					<dd>15 mins</dd>
				</div>
				<div>
					<dt>Cook Time</dt>
					<dd>15 mins</dd>
				</div>
				<div>
					<dt>Total Time</dt>
					<dd>30 mins</dd>
				</div>
			</dl>

			<h2 className='recipe-subhead'>
				{__('Ingredients', 'gutenberg-examples')}
			</h2>
			<RichText.Content
				tagName="ul"
				className="ingredients"
				value={ ingredients }
			/>

			<h2 className='recipe-subhead'>
				{__('Instructions', 'gutenberg-examples')}
			</h2>
			<RichText.Content
				tagName="ol"
				className="steps"
				value={ instructions }
			/>
			<NutritionalData ingredients={ingredients} />
		</div>
	);
};

export default Save;
