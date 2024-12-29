import { Checkbox, DatePicker, Form, Input, InputNumber, Radio, Select, TimePicker } from 'antd';
import { StyledCompileJsx, StyledCompileSectionJsx } from './style';
import { Element, TSection } from '../../types/Element';
import { ReactNode } from 'react';

export type TCompileJsx = {
	element: Element;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value?: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange?: (e: any) => void;
};

export const CompileSectionJsx: React.FC<{ element: TSection; children: ReactNode }> = ({ element, children }) => {
	return <StyledCompileSectionJsx $customstyles={element.styles}>{children}</StyledCompileSectionJsx>;
};

export const CompileJsx: React.FC<TCompileJsx> = ({ element }) => {
	const { elementId, elementType } = element;
	let jsxElement: JSX.Element | null = null;

	switch (elementType) {
		case 'Title':
			jsxElement = (
				<element.headingLevel className='form-alcmst__element-title'>{element.text}</element.headingLevel>
			);
			break;
		case 'Paragraph':
			jsxElement = <p className='form-alcmst__element-paragraph'>{element.text}</p>;
			break;
		case 'Separator':
			jsxElement = <hr className='form-alcmst__element-separator' />;
			break;
		case 'Spacer':
			jsxElement = (
				<div
					className='form-alcmst__element-spacer'
					style={{ height: `${element.height}px` }}
				></div>
			);
			break;
		case 'PhoneNumber': {
			const { attributes, includeCountryCode, label, required } = element;
			const { id, maxLength, minLength, name, placeholder, type } = attributes;

			jsxElement = (
				<Form.Item
					label={label || ''}
					htmlFor={id || elementId}
					name={attributes.name}
					rules={[
						{ required, message: 'This field is required' },
						{
							pattern: new RegExp(`^\\d{${minLength},${maxLength}}$`),
							message: `Phone number must be between ${minLength} and ${maxLength} digits long`
						}
					]}
				>
					<Input
						id={id || elementId}
						name={name}
						type={type}
						placeholder={placeholder}
						addonBefore={
							!includeCountryCode && (
								<Select
									defaultValue='+1'
									style={{ width: 80 }}
									options={[
										{ label: '+1', value: '+1' },
										{ label: '+91', value: '+91' }
									]}
								/>
							)
						}
					/>
				</Form.Item>
			);
			break;
		}
		case 'Name':
		case 'Email':
		case 'Text': {
			const { attributes, label, required } = element;
			const { id, maxLength, minLength, name, placeholder } = attributes;

			jsxElement = (
				<Form.Item
					label={label || ''}
					htmlFor={id || elementId}
					name={name}
					rules={[
						{ required, message: 'This field is required' },
						{ min: minLength, message: `Minimum length is ${minLength}` },
						{ max: maxLength, message: `Maximum length is ${maxLength}` }
					]}
					labelCol={{ className: 'custom-label' }}
				>
					<Input
						id={id || elementId}
						name={name}
						placeholder={placeholder}
					/>
				</Form.Item>
			);
			break;
		}
		case 'Address':
		case 'TextArea': {
			const { attributes, label, required } = element;
			const { cols, id, maxLength, minLength, name, placeholder, rows } = attributes;

			jsxElement = (
				<Form.Item
					label={label || ''}
					htmlFor={id || elementId}
					name={name}
					rules={[
						{ required, message: 'This field is required' },
						{ min: minLength, message: `Minimum length is ${minLength}` },
						{ max: maxLength, message: `Maximum length is ${maxLength}` }
					]}
				>
					<Input.TextArea
						id={id || elementId}
						name={name}
						placeholder={placeholder}
						cols={cols}
						rows={rows}
					/>
				</Form.Item>
			);
			break;
		}
		case 'Number': {
			const { attributes, label, required } = element;
			const { id, max, min, name, placeholder } = attributes;

			jsxElement = (
				<Form.Item
					label={label || ''}
					htmlFor={id || elementId}
					name={name}
					rules={[
						{ required, message: 'This field is required' },
						{ min: min, message: `Minimum value is ${min}` },
						{ max: max, message: `Maximum value is ${max}` }
					]}
				>
					<InputNumber
						id={id || elementId}
						name={name}
						placeholder={placeholder}
					/>
				</Form.Item>
			);
			break;
		}
		case 'Select': {
			const { allowMultiSelect, attributes, label, required } = element;
			const { id, name } = attributes;

			const { options } = element;
			jsxElement = (
				<Form.Item
					label={label || ''}
					htmlFor={id || elementId}
					name={name}
					rules={[{ required, message: 'This field is required' }]}
				>
					<Select
						id={id || elementId}
						options={options.map(({ label, value }) => ({ value, label }))}
						mode={allowMultiSelect ? 'multiple' : undefined}
					/>
				</Form.Item>
			);
			break;
		}
		case 'Checkbox': {
			const { attributes, label, required, value } = element;
			const { name } = attributes;

			jsxElement = (
				<Form.Item
					label={label || ''}
					name={name}
					rules={[{ required, message: 'This field is required' }]}
				>
					<Checkbox.Group options={[{ label, value }]} />
				</Form.Item>
			);
			break;
		}
		case 'CheckboxGroup': {
			const { attributes, label, required, options } = element;
			const { name } = attributes;

			jsxElement = (
				<Form.Item
					label={label || ''}
					name={name}
					rules={[{ required, message: 'This field is required' }]}
				>
					<Checkbox.Group options={options.map(({ label, value }) => ({ label, value }))} />
				</Form.Item>
			);
			break;
		}
		case 'Radio': {
			const { attributes, label, required, options } = element;
			const { name } = attributes;

			jsxElement = (
				<Form.Item
					label={label || ''}
					name={name}
					rules={[{ required, message: 'This field is required' }]}
				>
					<Radio.Group options={options.map(({ label, value }) => ({ label, value }))} />
				</Form.Item>
			);
			break;
		}
		case 'Date': {
			const { attributes, label, required } = element;
			const { id, name } = attributes;

			jsxElement = (
				<Form.Item
					label={label || ''}
					htmlFor={id || elementId}
					name={name}
					rules={[{ required, message: 'This field is required' }]}
				>
					<DatePicker id={id || elementId} />
				</Form.Item>
			);
			break;
		}
		case 'Time': {
			const { attributes, label, required } = element;
			const { id, name } = attributes;

			jsxElement = (
				<Form.Item
					label={label || ''}
					htmlFor={id || elementId}
					name={name}
					rules={[{ required, message: 'This field is required' }]}
				>
					<TimePicker id={id || elementId} />
				</Form.Item>
			);
			break;
		}
		case 'Button': {
			const { id, placeholder, type } = element.attributes;

			jsxElement = (
				<Form.Item>
					<button
						type={type}
						id={id || elementId}
						className='form-alcmst__btn'
					>
						{placeholder}
					</button>
				</Form.Item>
			);
			break;
		}
		default:
			break;
	}
	if (jsxElement === null) return;

	return <StyledCompileJsx $customstyles={element.styles}>{jsxElement}</StyledCompileJsx>;
};
