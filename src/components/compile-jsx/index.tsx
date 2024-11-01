import { Checkbox, DatePicker, Input, InputNumber, Radio, Select, TimePicker } from 'antd';
import { Draggable } from '../dnd/Draggable';
import { StyledCompileJsx } from './styles';
import { TBoardElementWrapper, TCompileJsx } from './types';
import { useAlchemyLab } from '../../alchemy-lab/useAlchemyLab';
import { clone, cn, remove } from '../../utils';
import { DeleteIcon, SpacerIcon } from '../../assets/Icons';
import { useDroppable } from '@dnd-kit/core';

const BoardElementWrapper: React.FC<TBoardElementWrapper> = ({ element, isOverlay, children }) => {
	const { elementId, elementType, sectionId } = element;

	const topHalf = useDroppable({
		id: `topHalf-${elementId}`,
		data: {
			elementId,
			elementType,
			sectionId
		}
	});
	const bottomHalf = useDroppable({
		id: `bottomHalf-${elementId}`,
		data: {
			elementId,
			elementType,
			sectionId
		}
	});

	return (
		<>
			<div
				ref={topHalf.setNodeRef}
				className={cn(
					'form-alcmst__board-element-top',
					isOverlay && 'form-alcmst__board-element-top--dragging',
					topHalf.isOver && 'form-alcmst__board-element-top--drag-over'
				)}
			></div>
			{children}
			<div
				ref={bottomHalf.setNodeRef}
				className={cn(
					'form-alcmst__board-element-bottom',
					isOverlay && 'form-alcmst__board-element-bottom--dragging',
					bottomHalf.isOver && 'form-alcmst__board-element-bottom--drag-over'
				)}
			></div>
		</>
	);
};

const CompileJsx: React.FC<TCompileJsx> = ({ element, isOverlay }) => {
	const { elementId, elementType } = element;
	let jsxElement: JSX.Element | null = null;

	const { data, setData, draggedElement } = useAlchemyLab();
	const sectionDroppable = useDroppable({
		id: `section-${elementId}`,
		data: {
			elementId,
			elementType
		}
	});

	switch (elementType) {
		case 'Title':
			jsxElement = (
				<div className='form-alcmst__element-wrapper'>
					<element.headingLevel className='form-alcmst__element-title'>{element.text}</element.headingLevel>
				</div>
			);
			break;
		case 'Paragraph':
			jsxElement = (
				<div className='form-alcmst__element-wrapper'>
					<p className='form-alcmst__element-paragraph'>{element.text}</p>
				</div>
			);
			break;
		case 'Separator':
			jsxElement = (
				<div className='form-alcmst__element-wrapper'>
					<hr className='form-alcmst__element-separator' />
				</div>
			);
			break;
		case 'Spacer':
			jsxElement = (
				<div className='form-alcmst__element-wrapper'>
					<div className='form-alcmst__element-spacer'></div>
				</div>
			);
			break;
		case 'Section':
			jsxElement = (
				<div className='form-alcmst__element-wrapper'>
					<div className='form-alcmst__element-section'>
						{element.children.map(childElement => (
							<CompileJsx
								key={childElement.elementId}
								element={childElement}
							/>
						))}
					</div>
				</div>
			);
			break;
		case 'PhoneNumber': {
			const { attributes, includeCountryCode, label, required } = element;
			const {
				disabled,
				id,
				maxLength: _omit1,
				minLength: _omit2,
				name,
				placeholder,
				readOnly,
				type
			} = attributes;

			jsxElement = (
				<div
					className={cn('form-alcmst__element-wrapper', required && 'form-alcmst__element-wrapper--required')}
				>
					{label && <label htmlFor={id || elementId}>{label}</label>}
					<Input
						data-name={name}
						data-required={required}
						id={id || elementId}
						name={name}
						type={type}
						placeholder={placeholder}
						readOnly={readOnly}
						disabled={disabled}
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
				</div>
			);
			break;
		}
		case 'Name':
		case 'Email':
		case 'Text': {
			const { attributes, label, required } = element;
			const { disabled, id, maxLength: _omit1, minLength: _omit2, name, placeholder, readOnly } = attributes;

			jsxElement = (
				<div
					className={cn('form-alcmst__element-wrapper', required && 'form-alcmst__element-wrapper--required')}
				>
					{label && <label htmlFor={id || elementId}>{label}</label>}
					<Input
						data-name={name}
						data-required={required}
						id={id || elementId}
						name={name}
						placeholder={placeholder}
						readOnly={readOnly}
						disabled={disabled}
					/>
				</div>
			);
			break;
		}
		case 'Address':
		case 'TextArea': {
			const { attributes, label, required } = element;
			const {
				cols,
				disabled,
				id,
				maxLength: _omit1,
				minLength: _omit2,
				name,
				placeholder,
				readOnly,
				rows
			} = attributes;

			jsxElement = (
				<div
					className={cn('form-alcmst__element-wrapper', required && 'form-alcmst__element-wrapper--required')}
				>
					{label && <label htmlFor={id || elementId}>{label}</label>}
					<Input.TextArea
						data-name={name}
						data-required={required}
						id={id || elementId}
						name={name}
						placeholder={placeholder}
						readOnly={readOnly}
						disabled={disabled}
						cols={cols}
						rows={rows}
					/>
				</div>
			);
			break;
		}
		case 'Number': {
			const { attributes, label, required } = element;
			const { disabled, id, max: _omit1, min: _omit2, name, placeholder, readOnly } = attributes;

			jsxElement = (
				<div
					className={cn('form-alcmst__element-wrapper', required && 'form-alcmst__element-wrapper--required')}
				>
					{label && <label htmlFor={id || elementId}>{label}</label>}
					<InputNumber
						data-name={name}
						data-required={required}
						id={id || elementId}
						name={name}
						placeholder={placeholder}
						readOnly={readOnly}
						disabled={disabled}
					/>
				</div>
			);
			break;
		}
		case 'Dropdown': {
			const { allowMultiSelect, attributes, dataSourceType, label, required } = element;
			const { disabled, id, name } = attributes;

			if (dataSourceType === 'values') {
				const { options } = element;
				jsxElement = (
					<div
						className={cn(
							'form-alcmst__element-wrapper',
							required && 'form-alcmst__element-wrapper--required'
						)}
					>
						{label && <label htmlFor={id || elementId}>{label}</label>}
						<Select
							data-name={name}
							data-required={required}
							id={id || elementId}
							disabled={disabled}
							options={options.map(({ selected: _omit, ...rest }) => rest)}
							mode={allowMultiSelect ? 'multiple' : 'tags'}
						/>
					</div>
				);
			}

			break;
		}
		case 'Checkbox': {
			const { attributes, label, required, checked, disabled, value } = element;
			const { name } = attributes;

			jsxElement = (
				<div
					className={cn('form-alcmst__element-wrapper', required && 'form-alcmst__element-wrapper--required')}
				>
					<Checkbox.Group
						data-name={name}
						data-required={required}
						data-value={value}
						name={name}
						defaultValue={checked ? [value] : []}
						options={[{ label, value, disabled }]}
					/>
				</div>
			);
			break;
		}
		case 'CheckboxGroup': {
			const { attributes, label, required, options } = element;
			const { name } = attributes;
			const defaultValueObjs = options.filter(({ checked }) => checked);
			const defaultValues = defaultValueObjs.map(({ value }) => value);

			jsxElement = (
				<div
					className={cn('form-alcmst__element-wrapper', required && 'form-alcmst__element-wrapper--required')}
				>
					{label && <label>{label}</label>}
					<Checkbox.Group
						data-name={name}
						data-required={required}
						name={name}
						defaultValue={defaultValues}
						options={options.map(({ checked: _omit, ...rest }) => rest)}
					/>
				</div>
			);
			break;
		}
		case 'Radio': {
			const { attributes, label, required, options } = element;
			const { disabled, name } = attributes;
			const defaultValueObj = options.find(({ checked }) => checked);
			const defaultValue = defaultValueObj ? defaultValueObj.value : null;

			jsxElement = (
				<div
					className={cn('form-alcmst__element-wrapper', required && 'form-alcmst__element-wrapper--required')}
				>
					{label && <label>{label}</label>}
					<Radio.Group
						data-name={name}
						data-required={required}
						name={name}
						disabled={disabled}
						defaultValue={defaultValue}
						options={options.map(({ checked: _omit, ...rest }) => rest)}
					/>
				</div>
			);
			break;
		}
		case 'Date': {
			const { attributes, label, required } = element;
			const { disabled, id, name, readOnly } = attributes;

			jsxElement = (
				<div
					className={cn('form-alcmst__element-wrapper', required && 'form-alcmst__element-wrapper--required')}
				>
					{label && <label htmlFor={id || elementId}>{label}</label>}
					<DatePicker
						data-name={name}
						data-required={required}
						id={id || elementId}
						name={name}
						readOnly={readOnly}
						disabled={disabled}
					/>
				</div>
			);
			break;
		}
		case 'Time': {
			const { attributes, label, required } = element;
			const { disabled, id, name, readOnly } = attributes;

			jsxElement = (
				<div
					className={cn('form-alcmst__element-wrapper', required && 'form-alcmst__element-wrapper--required')}
				>
					{label && <label htmlFor={id || elementId}>{label}</label>}
					<TimePicker
						data-name={name}
						data-required={required}
						id={id || elementId}
						name={name}
						readOnly={readOnly}
						disabled={disabled}
					/>
				</div>
			);
			break;
		}
		case 'Button': {
			const { disabled, id, placeholder, type } = element.attributes;

			jsxElement = (
				<div className='form-alcmst__element-wrapper'>
					<button
						data-type={type}
						type='button'
						id={id}
						disabled={disabled}
					>
						{placeholder}
					</button>
				</div>
			);
			break;
		}
		default:
			break;
	}
	if (jsxElement === null) return;

	return (
		<Draggable
			elementId={elementId}
			elementType={elementType}
			isPaletteElement={false}
		>
			<StyledCompileJsx>
				<div
					{...(elementType === 'Section' ? { ref: sectionDroppable.setNodeRef } : {})}
					className={cn(
						'form-alcmst__board-element',
						isOverlay && 'form-alcmst__board-element--dragging-overlay',
						draggedElement?.elementId === elementId && !isOverlay && 'form-alcmst__board-element--dragging',
						elementType === 'Section' && 'form-alcmst__board-element--section',
						sectionDroppable.isOver && 'form-alcmst__board-element--section-drag-over',
						draggedElement && 'form-alcmst__board-element--block-hover'
					)}
				>
					{elementType === 'Spacer' && (
						<div className='form-alcmst__board-element-spacer-info'>
							<div>{SpacerIcon}</div>
							<span>Spacer Field {element.height}px</span>
						</div>
					)}
					{elementType === 'Section' && (
						<div className='form-alcmst__board-element-section-info'>
							<span>Section Field</span>
						</div>
					)}
					{elementType === 'Section' ? (
						jsxElement
					) : (
						<BoardElementWrapper
							element={element}
							isOverlay={isOverlay}
						>
							{jsxElement}
						</BoardElementWrapper>
					)}
					<button
						className={cn(
							'form-alcmst__board-element-btn-delete',
							elementType === 'Section' && 'form-alcmst__board-element-btn-delete--section',
							isOverlay && 'form-alcmst__board-element-btn-delete--dragging'
						)}
						onClick={() => {
							const clonedData = clone(data);
							const result = remove({ data: clonedData, elementId });
							if (!result) return;
							setData(result.updatedData);
						}}
					>
						{DeleteIcon}
					</button>
				</div>
			</StyledCompileJsx>
		</Draggable>
	);
};

export default CompileJsx;
