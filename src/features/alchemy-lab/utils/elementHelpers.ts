import { Element, TSection } from '../../../types/Element';

const findSection = (data: Element[], sectionId: string): TSection | null => {
	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		if (element.elementId === sectionId && element.elementType === 'Section') {
			return element;
		}
		if (element.elementType === 'Section') {
			const sec = findSection(element.children, sectionId);
			if (sec) return sec;
		}
	}
	return null;
};

export const findElement = (data: Element[], elementId: string): Element | null => {
	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		if (element.elementId === elementId) {
			return element;
		}
		if (element.elementType === 'Section') {
			const el = findElement(element.children, elementId);
			if (el) return el;
		}
	}
	return null;
};

function findElementAndSection(
	data: Element[],
	elementId: string
): { element: Element; index: number; sectionArrayList: Element[] } | null {
	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		if (element.elementId === elementId) {
			return { element, index: i, sectionArrayList: data };
		}
		if (element.elementType === 'Section') {
			const result = findElementAndSection(element.children, elementId);
			if (result) return result;
		}
	}
	return null;
}

export const drop = ({
	data,
	element,
	targetElementId,
	targetSectionId,
	position
}: {
	data: Element[];
	element: Element;
	targetElementId: string;
	targetSectionId: string;
	position: 'up' | 'down';
}) => {
	if (targetSectionId === 'mainBoard' && targetElementId === '') {
		data.push(element);
		return data;
	}

	if (targetSectionId === 'mainBoard' && targetElementId !== '') {
		const index = data.findIndex(({ elementId }) => elementId === targetElementId);
		if (index === -1) {
			console.error('Target Element not found');
			return;
		}

		data.splice(position === 'up' ? index : index + 1, 0, element);
		return data;
	}

	if (targetSectionId !== 'mainBoard' && targetElementId === '') {
		const section = findSection(data, targetSectionId);
		if (!section) {
			console.error('Target section not found');
			return;
		}

		section.children.push(element);
		return data;
	}

	if (targetSectionId !== 'mainBoard' && targetElementId !== '') {
		const section = findSection(data, targetSectionId);
		if (!section) {
			console.error('Target section not found');
			return;
		}

		const index = section.children.findIndex(({ elementId }) => elementId === targetElementId);
		if (index === -1) {
			console.error('Target Element not found');
			return;
		}

		section.children.splice(position === 'up' ? index : index + 1, 0, element);
		return data;
	}
};

export const remove = ({ data, elementId }: { data: Element[]; elementId: string }) => {
	const source = findElementAndSection(data, elementId);
	if (!source) {
		console.error('Element not found');
		return;
	}
	const { element, index, sectionArrayList } = source;

	sectionArrayList.splice(index, 1);
	return { removedElement: element, updatedData: data };
};

export const reorder = ({
	data,
	elementId,
	targetElementId,
	targetSectionId,
	position
}: {
	data: Element[];
	elementId: string;
	targetElementId: string;
	targetSectionId: string;
	position: 'up' | 'down';
}) => {
	const result = remove({ data, elementId });
	if (!result) {
		console.error('Element not found');
		return;
	}
	return drop({
		data,
		element: { ...result.removedElement, sectionId: targetSectionId },
		targetElementId,
		targetSectionId,
		position
	});
};

export const updateElementInData = ({
	data,
	elementId,
	updatedElement
}: {
	data: Element[];
	elementId: string;
	updatedElement: Element;
}) => {
	const source = findElementAndSection(data, elementId);
	if (!source) {
		console.error('Element not found');
		return;
	}
	const { index, sectionArrayList } = source;

	sectionArrayList[index] = updatedElement;
	return { updatedData: data };
};

export const validateElementProperties = (element: Element) => {
	const { elementType } = element;
	const invalidProperties: string[] = [];

	if (elementType === 'Title' || elementType === 'Paragraph') {
		if (element.text.trim() === '') invalidProperties.push('text');
	}

	if (elementType === 'Spacer') {
		if (typeof element.height !== 'number' || isNaN(element.height) || element.height <= 0)
			invalidProperties.push('height');
	}

	if (elementType === 'Section') {
		if (element.name.trim() === '') invalidProperties.push('name');
	}

	if ('attributes' in element && 'name' in element.attributes) {
		if (element.attributes.name.trim() === '') invalidProperties.push('name');
	}

	if (elementType === 'Checkbox') {
		if (element.label.trim() === '') invalidProperties.push('label');
		if (element.value.trim() === '') invalidProperties.push('value');
	}

	if (elementType === 'Select' || elementType === 'CheckboxGroup' || elementType === 'Radio') {
		const invalidOptions = element.options.filter(({ label, value }) => label.trim() === '' || value.trim() === '');
		if (invalidOptions.length > 0) invalidProperties.push('options');
	}

	return invalidProperties;
};
