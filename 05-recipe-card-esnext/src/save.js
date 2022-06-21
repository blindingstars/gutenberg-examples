/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { title, mediaURL, ingredients, instructions },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps }>
			<RichText.Content tagName="h1" value={ title } />

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

			{ mediaURL && (
				<img
					className="recipe-image"
					src={ mediaURL }
					alt={ __( 'Recipe Image', 'gutenberg-examples' ) }
				/>
			)}

			<h3>{ __( 'Ingredients', 'gutenberg-examples' ) }</h3>
			<RichText.Content
				tagName="ul"
				className="ingredients"
				value={ ingredients }
			/>

			<h3>{ __( 'Instructions', 'gutenberg-examples' ) }</h3>
			<RichText.Content
				tagName="div"
				className="steps"
				value={ instructions }
			/>
		</div>
	);
};

export default Save;
