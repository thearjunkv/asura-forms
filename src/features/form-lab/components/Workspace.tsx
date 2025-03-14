import { useRef } from 'react';
import { useDndMonitor } from '@dnd-kit/core';
import { useFormLab } from '../hooks/useFormLab';
import { StyledWorkspace } from '../styles/workspaceStyles';
import WorkspaceBoard from './WorkspaceBoard';
import { Element } from '../../../types/Element';
import { clone, genId } from '../../../utils/helpers';
import { drop, reorder } from '../utils/elementHelpers';
import { cleanState } from '../../../data/cleanState';

const Workspace: React.FC = () => {
	const { formData, setFormData } = useFormLab();
	const nameAttrCountsRef = useRef<{ [key: string]: number }>({
		Section: 0,
		Name: 0,
		Address: 0,
		Email: 0,
		PhoneNumber: 0,
		Text: 0,
		TextArea: 0,
		Number: 0,
		Select: 0,
		Checkbox: 0,
		CheckboxGroup: 0,
		Radio: 0,
		Date: 0,
		Time: 0
	});

	useDndMonitor({
		onDragEnd: ({ active, over }) => {
			if (!active.data.current) return;
			if (!over) return;

			const { elementId, elementType, isPaletteElement } = active.data.current;

			let targetElementId: string = '';
			let targetSectionId: string = '';
			let position: 'up' | 'down' = 'up';

			const overId = (over.id as string).split('-')[0];

			if (overId === 'mainBoard') targetSectionId = overId;
			else {
				if (!over.data.current) return;
				if (overId === 'section') targetSectionId = over.data.current.elementId;
				else if (overId === 'topHalf' || overId === 'bottomHalf') {
					targetSectionId = over.data.current.sectionId;
					targetElementId = over.data.current.elementId;
				}
			}

			if (elementId === targetElementId) return; // same element
			if (elementId === targetSectionId) return; // same section

			if (overId === 'topHalf') position = 'up';
			else position = 'down';

			const clonedFormData = clone(formData) as Element[];
			if (isPaletteElement) {
				const element = cleanState.find(el => el.elementType === elementType);
				if (!element) return;

				const clonedElement = clone(element) as Element;

				{
					const { elementType } = clonedElement;
					if (
						elementType !== 'Title' &&
						elementType !== 'Paragraph' &&
						elementType !== 'Separator' &&
						elementType !== 'Spacer' &&
						elementType !== 'Button'
					) {
						nameAttrCountsRef.current[elementType] += 1;
						if (elementType === 'Section') {
							clonedElement.name = `${clonedElement.name}_${nameAttrCountsRef.current[elementType]}`;
						} else {
							clonedElement.attributes.name = `${clonedElement.attributes.name}_${nameAttrCountsRef.current[elementType]}`;
						}
					}
				}

				const updatedFormData = drop({
					formData: clonedFormData,
					element: { ...clonedElement, elementId: genId(), sectionId: targetSectionId },
					position,
					targetElementId,
					targetSectionId
				});
				if (!updatedFormData) return;
				setFormData(updatedFormData);
			} else {
				const updatedFormData = reorder({
					formData: clonedFormData,
					elementId,
					targetElementId,
					targetSectionId,
					position
				});
				if (!updatedFormData) return;
				setFormData(updatedFormData);
			}
		}
	});

	return (
		<StyledWorkspace className='asura-forms__workspace'>
			<WorkspaceBoard />
		</StyledWorkspace>
	);
};

export default Workspace;
