import { ReactElement, useEffect, useState } from 'react';
import { FormElement, OptionsApiConfig } from '../types/FormElements';
import FormElementWrapper from './FormElementWrapper';
import FormItem from '../general_components/FormItem';
import InputText from '../general_components/InputText';
import InputNumber from '../general_components/InputNumber';
import Date from '../general_components/Date';
import Time from '../general_components/Time';
import Button from '../general_components/Button';
import TextArea from '../general_components/Textarea';
import Select from '../general_components/Select';
import CheckboxGroup from '../general_components/CheckboxGroup';
import Radio from '../general_components/Radio';
import getOptionsFromApi from '../utils/getOptionsFromApi';
import { countryCodes } from '../constants/countryCodes';

type Options = {
	label: string;
	value: string;
}[];

type RenderFormElementProps =
	| {
			mode: 'Builder';
			formData: FormElement[];
			formElement: FormElement;
			index: number;
			onEditElement: (element: FormElement) => void;
			onRemove: (uid: string) => void;
			isDragging: boolean;
			onDragStart: (elementType: FormElement['elementType'], uid: string, isWidget?: boolean) => void;
			onDragOver: (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => void;
			onDragEnd: () => void;
			dataSourceType: 'values' | 'api' | null;
			apiOptions: OptionsApiConfig | null;
	  }
	| {
			mode: 'Render';
			formData: FormElement[];
			setFormData: React.Dispatch<React.SetStateAction<FormElement[]>>;
			formElement: FormElement;
			index: number;
			dataSourceType: 'values' | 'api' | null;
			apiOptions: OptionsApiConfig | null;
	  };

const RenderFormElement = (props: RenderFormElementProps) => {
	const [optionsFromApi, setOptionsFromApi] = useState<Options>([]);
	let formElementHtml: ReactElement;
	const { mode, formElement, index } = props;
	const { elementType, uid } = formElement;

	useEffect(() => {
		if (props.dataSourceType === 'api' && props.apiOptions !== null)
			getOptionsFromApi(props.apiOptions).then(data => data !== undefined && setOptionsFromApi(data));
	}, [elementType, props.apiOptions, props.dataSourceType]);

	if (elementType === 'name' || elementType === 'text') {
		const { label, attributes, labelPosition, labelStyles, elementStyles, required } = formElement;
		formElementHtml = (
			<FormItem
				layout={labelPosition === 'left' ? 'horizontal' : 'vertical'}
				label={label || ''}
				name={attributes.name}
				rules={
					mode === 'Render'
						? [
								{ required, message: 'This field is required' },
								{ min: attributes.minLength, message: `Minimum length is ${attributes.minLength}` },
								{ max: attributes.maxLength, message: `Maximum length is ${attributes.maxLength}` },
						  ]
						: []
				}
				labelCol={{ className: 'custom-label' }}
				labelStyles={labelStyles}
				elementStyles={elementStyles}
			>
				<InputText
					{...attributes}
					className='custom-element'
				/>
			</FormItem>
		);
	} else if (elementType === 'email') {
		const { label, attributes, labelPosition, labelStyles, elementStyles, required } = formElement;
		formElementHtml = (
			<FormItem
				layout={labelPosition === 'left' ? 'horizontal' : 'vertical'}
				label={label || ''}
				name={attributes.name}
				rules={
					mode === 'Render'
						? [
								{
									type: 'email',
									message: 'The input is not a valid email address!',
								},
								{ required, message: 'This field is required' },
								{ min: attributes.minLength, message: `Minimum length is ${attributes.minLength}` },
								{ max: attributes.maxLength, message: `Maximum length is ${attributes.maxLength}` },
						  ]
						: []
				}
				labelCol={{ className: 'custom-label' }}
				labelStyles={labelStyles}
				elementStyles={elementStyles}
			>
				<InputText
					{...attributes}
					className='custom-element'
				/>
			</FormItem>
		);
	} else if (elementType === 'phone number') {
		const { label, attributes, labelPosition, labelStyles, elementStyles, required, requireCountryCode } =
			formElement;
		formElementHtml = (
			<FormItem
				layout={labelPosition === 'left' ? 'horizontal' : 'vertical'}
				label={label || ''}
				name={attributes.name}
				rules={
					mode === 'Render'
						? [
								{ required, message: 'This field is required' },
								{
									pattern: /^\d{7,15}$/,
									message: 'Phone number must be between 7 and 15 digits long',
								},
						  ]
						: []
				}
				labelCol={{ className: 'custom-label' }}
				labelStyles={labelStyles}
				elementStyles={elementStyles}
			>
				{requireCountryCode ? (
					<InputText
						{...attributes}
						maxLength={15}
						addonBefore={
							<FormItem
								name='countryCode'
								noStyle
								rules={[{ required: true, message: 'Please select a country code' }]}
								initialValue='+91'
							>
								<Select
									showSearch
									options={countryCodes}
									placeholder='Code'
									style={{ width: 120 }}
									filterOption={(input, option) =>
										(String(option?.label) ?? '').toLowerCase().includes(input.toLowerCase())
									}
								/>
							</FormItem>
						}
						allowClear
					/>
				) : (
					<InputText
						{...attributes}
						maxLength={15}
						allowClear
					/>
				)}
			</FormItem>
		);
	} else if (elementType === 'number') {
		const { label, attributes, labelPosition, labelStyles, elementStyles, required } = formElement;
		formElementHtml = (
			<FormItem
				layout={labelPosition === 'left' ? 'horizontal' : 'vertical'}
				label={label || ''}
				name={attributes.name}
				rules={
					mode === 'Render'
						? [
								{ required, message: 'This field is required' },
								{ min: attributes.min, message: `Minimum length is ${attributes.min}` },
								{ max: attributes.max, message: `Maximum length is ${attributes.max}` },
						  ]
						: []
				}
				labelCol={{ className: 'custom-label' }}
				labelStyles={labelStyles}
				elementStyles={elementStyles}
			>
				<InputNumber
					{...attributes}
					className='custom-element'
				/>
			</FormItem>
		);
	} else if (elementType === 'date') {
		const { label, attributes, labelPosition, labelStyles, elementStyles, required } = formElement;
		formElementHtml = (
			<FormItem
				layout={labelPosition === 'left' ? 'horizontal' : 'vertical'}
				label={label || ''}
				name={attributes.name}
				rules={[{ required: mode === 'Render' ? required : false, message: 'This field is required' }]}
				labelCol={{ className: 'custom-label' }}
				labelStyles={labelStyles}
				elementStyles={elementStyles}
			>
				<Date
					{...attributes}
					className='custom-element'
				/>
			</FormItem>
		);
	} else if (elementType === 'time') {
		const { label, attributes, labelPosition, labelStyles, elementStyles, required } = formElement;
		formElementHtml = (
			<FormItem
				layout={labelPosition === 'left' ? 'horizontal' : 'vertical'}
				label={label || ''}
				name={attributes.name}
				rules={[{ required: mode === 'Render' ? required : false, message: 'This field is required' }]}
				labelCol={{ className: 'custom-label' }}
				labelStyles={labelStyles}
				elementStyles={elementStyles}
			>
				<Time
					{...attributes}
					className='custom-element'
				/>
			</FormItem>
		);
	} else if (elementType === 'button') {
		const { elementStyles, attributes } = formElement;
		const { placeholder, type, disabled, id } = attributes;

		formElementHtml = (
			<FormItem elementStyles={elementStyles}>
				<Button
					type='primary'
					htmlType={type}
					id={id}
					disabled={disabled}
					className='custom-element'
				>
					{placeholder}
				</Button>
			</FormItem>
		);
	} else if (elementType === 'textarea') {
		const { label, labelPosition, labelStyles, elementStyles, attributes, required } = formElement;
		formElementHtml = (
			<FormItem
				layout={labelPosition === 'left' ? 'horizontal' : 'vertical'}
				label={label || ''}
				name={attributes.name}
				rules={[{ required: mode === 'Render' ? required : false, message: 'This field is required' }]}
				labelCol={{ className: 'custom-label' }}
				labelStyles={labelStyles}
				elementStyles={elementStyles}
			>
				<TextArea />
			</FormItem>
		);
	} else if (elementType === 'select') {
		const { label, labelPosition, labelStyles, elementStyles, attributes, options, required } = formElement;

		formElementHtml = (
			<FormItem
				layout={labelPosition === 'left' ? 'horizontal' : 'vertical'}
				label={label || ''}
				name={attributes.name}
				rules={[{ required: mode === 'Render' ? required : false, message: 'This field is required' }]}
				labelCol={{ className: 'custom-label' }}
				labelStyles={labelStyles}
				elementStyles={elementStyles}
			>
				{formElement.dataSourceType === 'values' ? (
					<Select
						mode={attributes.multiple ? 'tags' : undefined}
						options={options.map(({ label, value, disabled }) => ({ value, label, disabled }))}
						defaultValue={options.filter(option => option.selected).map(option => option.value)}
					/>
				) : (
					<Select
						mode={attributes.multiple ? 'tags' : undefined}
						options={optionsFromApi.map(({ label, value }) => ({ value, label }))}
					/>
				)}
			</FormItem>
		);
	} else if (elementType === 'checkbox') {
		const { label, labelPosition, labelStyles, elementStyles, attributes, options, required } = formElement;
		formElementHtml = (
			<FormItem
				layout={labelPosition === 'left' ? 'horizontal' : 'vertical'}
				label={label || ''}
				name={attributes.name}
				rules={[{ required: mode === 'Render' ? required : false, message: 'This field is required' }]}
				labelCol={{ className: 'custom-label' }}
				labelStyles={labelStyles}
				elementStyles={elementStyles}
			>
				{formElement.dataSourceType === 'values' ? (
					<CheckboxGroup
						options={options.map(({ label, value, disabled }) => ({
							value,
							label,
							disabled,
						}))}
						defaultValue={options.filter(option => option.checked).map(option => option.value)}
					/>
				) : (
					<CheckboxGroup options={optionsFromApi.map(({ label, value }) => ({ value, label }))} />
				)}
			</FormItem>
		);
	} else if (elementType === 'radio') {
		const { label, labelPosition, labelStyles, elementStyles, attributes, options, required } = formElement;
		const selectedValue = options.find(option => option.checked);
		formElementHtml = (
			<FormItem
				layout={labelPosition === 'left' ? 'horizontal' : 'vertical'}
				label={label || ''}
				name={attributes.name}
				rules={[{ required: mode === 'Render' ? required : false, message: 'This field is required' }]}
				labelCol={{ className: 'custom-label' }}
				labelStyles={labelStyles}
				elementStyles={elementStyles}
			>
				{formElement.dataSourceType === 'values' ? (
					<Radio
						options={options.map(({ label, value, disabled }) => ({
							value,
							label,
							disabled,
						}))}
						defaultValue={selectedValue ? selectedValue.value : undefined}
					/>
				) : (
					<Radio options={optionsFromApi.map(({ label, value }) => ({ value, label }))} />
				)}
			</FormItem>
		);
	} else {
		formElementHtml = <></>;
	}

	if (mode === 'Builder') {
		const { isDragging, onDragStart, onDragOver, onDragEnd, formData, onEditElement, onRemove } = props;
		const formElementWrapperProps = {
			uid,
			formData,
			onEditElement,
			onRemove,
		};

		return (
			<div
				className={`form-element ${isDragging && 'is-dragging'}`}
				id={uid}
				draggable
				onDragStart={() => onDragStart(elementType, uid, false)}
				onDragOver={(e: React.DragEvent<HTMLDivElement>) => onDragOver(e, index)}
				onDragEnd={onDragEnd}
			>
				<FormElementWrapper {...formElementWrapperProps}>{formElementHtml}</FormElementWrapper>
			</div>
		);
	} else {
		return <div className='form-element'>{formElementHtml}</div>;
	}
};

export default RenderFormElement;
