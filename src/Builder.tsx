import { useEffect, useRef, useState } from 'react';
import { ElementEditor } from './types/Builder';
import { FormElement } from './types/FormElements';
import styled from 'styled-components';
import Picker from './Picker';
import { StyledButton } from './styles/StyledElements';

type BuilerProps = {
	title?: string;
	formData?: FormElement[];
	onSave: (formData: FormElement[]) => void;
};

type DragElement = {
	type: FormElement['elementType'];
	uid: string;
	isWidget: boolean;
} | null;

type DStart = { type: FormElement['elementType']; uid: string; isWidget: boolean };

const StyledBuilder = styled.div`
	& {
		/* background-color: green; */
		border-radius: 4px;
	}

	& .header {
		padding: 0.6em 1em;
		background-color: var(--grey-50);
		display: flex;
		justify-content: space-between;
		align-items: center;

		&__title {
			font-size: 0.95rem;
			color: var(--grey-800);
		}

		& .form-name {
			font-size: 1rem;
			color: var(--grey-1000);
		}

		&__controls > button {
			margin-left: 1em;
		}
	}

	& .body {
		display: flex;

		&__main {
			width: calc(100% - 200px);
		}
	}
`;

const Builder: React.FC<BuilerProps> = props => {
	const [formData, setFormData] = useState<FormElement[]>(() => props.formData || []);

	const [dragElement, setDragElement] = useState<DragElement>(null);
	const dropZoneRef = useRef<HTMLDivElement>(null);

	// const [elementEditor, setElementEditor] = useState<ElementEditor>({ show: false, element: null });

	// useEffect(() => {
	//     if (props.formData && Array.isArray(props.formData)) setFormData(props.formData);
	// }, [props.formData]);

	// useEffect(() => {
	//     if (formData.length === 0) dropZoneRef.current?.classList.add('empty');
	//     else dropZoneRef.current?.classList.remove('empty');
	// }, [formData]);

	const dragStart = (props: DStart) => setDragElement(props);
	const dragEnd = () => setDragElement(null);

	return (
		<StyledBuilder>
			<div className='header'>
				<div className='header__title'>
					Form: <span className='form-name'>{props.title || 'Custom Form'}</span>
				</div>
				<div className='header__controls'>
					<StyledButton>Preview</StyledButton>
					<StyledButton>Save</StyledButton>
				</div>
			</div>
			<div className='body'>
				<div className='body__main'>
					<div></div>
				</div>
				<div className='body__sidebar'>
					<Picker
						dStart={(type, uid, isWidget) => dragStart({ type, uid, isWidget })}
						dStop={dragEnd}
					/>
				</div>
			</div>
		</StyledBuilder>
	);
};

export default Builder;
