import { Input, InputNumber, Select, Switch } from 'antd';
import { useAlchemyLab } from '../hooks/useAlchemyLab';
import { Element } from '../../../types/Element';
import { cn } from '../../../utils/helpers';
import { AddIcon, XIcon } from '../../../assets/Icons';

type TPropertyElements = { invalidElementProperties: string[] };

const PropertyElements: React.FC<TPropertyElements> = ({ invalidElementProperties }) => {
	const { selectedElement, setSelectedElement } = useAlchemyLab();

	if (!selectedElement) return null;

	const { elementType } = selectedElement;
	const jsxElement: JSX.Element[] = [];

	const handleRootChange = (prev: Element | null, property: string, val: string | number | boolean) => {
		if (!prev) return null;
		return { ...prev, [property]: val };
	};

	const handleAttrChange = (prev: Element | null, property: string, val: string | number | boolean) => {
		if (!prev) return null;
		return { ...prev, attributes: { ...prev.attributes, [property]: val } };
	};

	const elementHasOptions = (element: Element) => {
		const { elementType } = element;
		return elementType === 'CheckboxGroup' || elementType === 'Radio' || elementType === 'Select';
	};

	/* text */
	if (elementType === 'Title' || elementType === 'Paragraph')
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label
					htmlFor='element_text'
					className='form-alcmst__required-asterisk'
				>
					Text
				</label>
				<Input
					name='element_text'
					id='element_text'
					value={selectedElement.text}
					onChange={e => setSelectedElement(p => handleRootChange(p, 'text', e.target.value))}
				/>
				{invalidElementProperties.includes('text') && (
					<span className='form-alcmst__property-element--error'>Text is required</span>
				)}
			</div>
		);

	/* name */
	if (elementType === 'Section')
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label
					htmlFor='element_section_name'
					className='form-alcmst__required-asterisk'
				>
					Name
				</label>
				<Input
					name='element_section_name'
					id='element_section_name'
					value={selectedElement.name}
					onChange={e => setSelectedElement(p => handleRootChange(p, 'name', e.target.value))}
				/>
				{invalidElementProperties.includes('name') && (
					<span className='form-alcmst__property-element--error'>Name is required</span>
				)}
			</div>
		);

	if ('headingLevel' in selectedElement)
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_heading_level'>Size</label>
				<Select
					id='element_heading_level'
					value={selectedElement.headingLevel}
					onChange={val => setSelectedElement(p => handleRootChange(p, 'headingLevel', val))}
					options={['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(option => ({
						label: option,
						value: option
					}))}
				/>
			</div>
		);

	if ('height' in selectedElement)
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label
					htmlFor='element_height'
					className='form-alcmst__required-asterisk'
				>
					Height
				</label>
				<InputNumber
					name='element_height'
					id='element_height'
					value={selectedElement.height}
					onChange={val => setSelectedElement(p => handleRootChange(p, 'height', val))}
				/>
				{invalidElementProperties.includes('height') && (
					<span className='form-alcmst__property-element--error'>Enter a valid number</span>
				)}
			</div>
		);

	if (elementType === 'Button')
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_type'>Button type</label>
				<Select
					id='element_type'
					value={selectedElement.attributes.type}
					onChange={val => setSelectedElement(p => handleAttrChange(p, 'type', val))}
					options={['submit', 'reset'].map(option => ({
						label: option,
						value: option
					}))}
				/>
			</div>
		);

	if ('attributes' in selectedElement && 'name' in selectedElement.attributes)
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label
					htmlFor='element_name'
					className='form-alcmst__required-asterisk'
				>
					Name
				</label>
				<Input
					name='element_name'
					id='element_name'
					value={selectedElement.attributes.name}
					onChange={e => setSelectedElement(p => handleAttrChange(p, 'name', e.target.value))}
				/>
				{invalidElementProperties.includes('name') && (
					<span className='form-alcmst__property-element--error'>Name is required</span>
				)}
			</div>
		);

	if ('label' in selectedElement)
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label
					htmlFor='element_label'
					className={cn(elementType === 'Checkbox' && 'form-alcmst__required-asterisk')}
				>
					Label
				</label>
				<Input
					name='element_label'
					id='element_label'
					value={selectedElement.label}
					onChange={e => setSelectedElement(p => handleRootChange(p, 'label', e.target.value))}
				/>
				{elementType === 'Checkbox' && invalidElementProperties.includes('label') && (
					<span className='form-alcmst__property-element--error'>Label is required</span>
				)}
			</div>
		);

	/* value */
	if (elementType === 'Checkbox')
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label
					htmlFor='element_value'
					className={cn(selectedElement.elementType === 'Checkbox' && 'form-alcmst__required-asterisk')}
				>
					Value
				</label>
				<Input
					name='element_value'
					id='element_value'
					value={selectedElement.value}
					onChange={e => setSelectedElement(p => handleRootChange(p, 'value', e.target.value))}
				/>
				{invalidElementProperties.includes('value') && (
					<span className='form-alcmst__property-element--error'>Value is required</span>
				)}
			</div>
		);

	if ('attributes' in selectedElement && 'placeholder' in selectedElement.attributes)
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_placeholder'>Placeholder</label>
				<Input
					name='element_placeholder'
					id='element_placeholder'
					value={selectedElement.attributes.placeholder}
					onChange={e => setSelectedElement(p => handleAttrChange(p, 'placeholder', e.target.value))}
				/>
			</div>
		);

	if ('attributes' in selectedElement && 'id' in selectedElement.attributes)
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_id'>ID</label>
				<Input
					name='element_id'
					id='element_id'
					value={selectedElement.attributes.id}
					onChange={e => setSelectedElement(p => handleAttrChange(p, 'id', e.target.value))}
				/>
			</div>
		);

	if (elementHasOptions(selectedElement)) {
		jsxElement.push(
			<div
				className='form-alcmst__property-element form-alcmst__property-element--options'
				key={jsxElement.length + 1}
			>
				<div className='form-alcmst__property-element-options-header'>
					<span className='form-alcmst__required-asterisk'>Options</span>
					<button
						className='form-alcmst__btn'
						onClick={() =>
							setSelectedElement(p => {
								if (!p) return p;
								return { ...p, options: [...p.options, { label: '', value: '' }] };
							})
						}
					>
						{AddIcon} Add
					</button>
				</div>
				<div className='form-alcmst__property-element-options-body'>
					{selectedElement.options.map((option, index) => (
						<div key={index}>
							<Input
								name={`element_option_label_${index}`}
								value={option.label}
								onChange={e =>
									setSelectedElement(p => {
										if (!p) return p;
										if (elementHasOptions(p))
											return {
												...p,
												options: p.options.map((opt, i) =>
													i === index ? { ...opt, label: e.target.value } : opt
												)
											};
										return p;
									})
								}
								placeholder='Label'
							/>
							<Input
								name={`element_option_value_${index}`}
								value={option.value}
								onChange={e =>
									setSelectedElement(p => {
										if (!p) return p;
										if (elementHasOptions(p))
											return {
												...p,
												options: p.options.map((opt, i) =>
													i === index ? { ...opt, value: e.target.value } : opt
												)
											};
										return p;
									})
								}
								placeholder='Value'
							/>
							<button
								className='form-alcmst__btn--secondary'
								onClick={() => {
									if (index === 0) return;
									setSelectedElement(p => {
										if (!p) return p;

										if (elementHasOptions(p))
											return { ...p, options: p.options.filter((_item, i) => i !== index) };
										else return p;
									});
								}}
							>
								{XIcon}
							</button>
						</div>
					))}
				</div>
				{invalidElementProperties.includes('options') && (
					<span className='form-alcmst__property-element--error'>
						Please ensure each option has both a label and a value
					</span>
				)}
			</div>
		);
	}

	if ('includeCountryCode' in selectedElement)
		jsxElement.push(
			<div
				className='form-alcmst__property-element form-alcmst__property-element--toggle'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_include_country_code'>Include country code</label>
				<Switch
					id='element_include_country_code'
					value={selectedElement.includeCountryCode}
					onChange={val => setSelectedElement(p => handleRootChange(p, 'includeCountryCode', val))}
				/>
			</div>
		);

	if ('allowMultiSelect' in selectedElement)
		jsxElement.push(
			<div
				className='form-alcmst__property-element form-alcmst__property-element--toggle'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_allow_multi_select'>Allow multi select</label>
				<Switch
					id='element_allow_multi_select'
					value={selectedElement.allowMultiSelect}
					onChange={val => setSelectedElement(p => handleRootChange(p, 'allowMultiSelect', val))}
				/>
			</div>
		);

	if ('required' in selectedElement)
		jsxElement.push(
			<div
				className='form-alcmst__property-element form-alcmst__property-element--toggle'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_required'>Required</label>
				<Switch
					id='element_required'
					value={selectedElement.required}
					onChange={val => setSelectedElement(p => handleRootChange(p, 'required', val))}
				/>
			</div>
		);

	if ('attributes' in selectedElement && 'minLength' in selectedElement.attributes)
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_min_length'>Min length</label>
				<InputNumber
					name='element_min_length'
					id='element_min_length'
					value={selectedElement.attributes.minLength}
					onChange={val => setSelectedElement(p => handleAttrChange(p, 'minLength', val))}
				/>
			</div>
		);

	if ('attributes' in selectedElement && 'maxLength' in selectedElement.attributes)
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_max_length'>Max length</label>
				<InputNumber
					name='element_max_length'
					id='element_max_length'
					value={selectedElement.attributes.maxLength}
					onChange={val => setSelectedElement(p => handleAttrChange(p, 'maxLength', val))}
				/>
			</div>
		);

	if ('attributes' in selectedElement && 'min' in selectedElement.attributes)
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_min'>Minimum value</label>
				<InputNumber
					name='element_min'
					id='element_min'
					value={selectedElement.attributes.min}
					onChange={val => setSelectedElement(p => handleAttrChange(p, 'min', val))}
				/>
			</div>
		);

	if ('attributes' in selectedElement && 'max' in selectedElement.attributes)
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_max'>Maximum value</label>
				<InputNumber
					name='element_max'
					id='element_max'
					value={selectedElement.attributes.max}
					onChange={val => setSelectedElement(p => handleAttrChange(p, 'max', val))}
				/>
			</div>
		);

	if ('attributes' in selectedElement && 'rows' in selectedElement.attributes)
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_rows'>No of rows</label>
				<InputNumber
					name='element_rows'
					id='element_rows'
					value={selectedElement.attributes.rows}
					onChange={val => setSelectedElement(p => handleAttrChange(p, 'rows', val))}
				/>
			</div>
		);

	if ('attributes' in selectedElement && 'cols' in selectedElement.attributes)
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_cols'>No of cols</label>
				<InputNumber
					name='element_cols'
					id='element_cols'
					value={selectedElement.attributes.cols}
					onChange={val => setSelectedElement(p => handleAttrChange(p, 'cols', val))}
				/>
			</div>
		);

	if ('styles' in selectedElement)
		jsxElement.push(
			<div
				className='form-alcmst__property-element'
				key={jsxElement.length + 1}
			>
				<label htmlFor='element_styles'>Styles</label>
				<Input.TextArea
					name='element_styles'
					id='element_styles'
					value={selectedElement.styles}
					onChange={e => setSelectedElement(p => handleRootChange(p, 'styles', e.target.value))}
					rows={6}
				/>
			</div>
		);

	return jsxElement;
};

export default PropertyElements;
