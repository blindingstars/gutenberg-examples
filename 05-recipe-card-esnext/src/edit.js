/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import NutritionalData from './components/NutritionalData';

const Edit = ( props ) => {
	const {
		attributes: { title, mediaID, mediaURL, ingredients, instructions },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = ( value ) => {
		setAttributes( { title: value } );
	};

	const onSelectImage = ( media ) => {
		setAttributes( {
			mediaURL: media.url,
			mediaID: media.id,
		} );
	};
	const onChangeIngredients = ( value ) => {
		setAttributes({ ingredients: value });
	};

	const onChangeInstructions = ( value ) => {
		setAttributes( { instructions: value } );
	};

	return (
		<div { ...blockProps }>
			<RichText
				tagName="h1"
				placeholder={ __(
					'Write Recipe title…',
					'gutenberg-examples'
				) }
				value={ title }
				onChange={onChangeTitle}
				className="recipe-title"
			/>
			<div className="recipe-image">
				<MediaUpload
					onSelect={ onSelectImage }
					allowedTypes="image"
					value={ mediaID }
					render={ ( { open } ) => (
						<Button
							className={
								mediaID ? 'image-button' : 'button button-large'
							}
							onClick={ open }
						>
							{ ! mediaID ? (
								__( 'Upload Image', 'gutenberg-examples' )
							) : (
								<img
									src={ mediaURL }
									alt={ __(
										'Upload Recipe Image',
										'gutenberg-examples'
									) }
								/>
							) }
						</Button>
					) }
				/>
			</div>

			<h2 className='recipe-subhead'>
				{__('Ingredients', 'gutenberg-examples')}
			</h2>
			<RichText
				tagName="ul"
				multiline="li"
				placeholder={ __(
					'Write a list of ingredients…',
					'gutenberg-examples'
				) }
				value={ ingredients }
				onChange={ onChangeIngredients }
				className="ingredients"
			/>

			<h2 className='recipe-subhead'>
				{__('Instructions', 'gutenberg-examples')}
			</h2>
			<RichText
				tagName="ol"
				multiline="li"
				className="steps"
				placeholder={ __(
					'Write the instructions…',
					'gutenberg-examples'
				) }
				value={ instructions }
				onChange={ onChangeInstructions }
			/>

			<NutritionalData ingredients={ingredients} />
		</div>
	);
};

export default Edit;
