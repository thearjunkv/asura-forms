import { Element, TSection } from './types';

export const genId = () => Date.now() + '-' + Math.random().toString(36).slice(2, 11);

export const genHtmlId = (name: string) => `${name}-${genId()}`;

export const cn = (...classes: (string | undefined | null | boolean)[]) => classes.filter(Boolean).join(' ');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const clone = (data: any) => JSON.parse(JSON.stringify(data));

function findSection(data: Element[], sectionId: string): TSection | null {
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
}

export function findElement(data: Element[], elementId: string): Element | null {
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
	const clonedData = clone(data) as Element[];
	const clonedElement = clone(element) as Element;
	if (targetSectionId === 'mainBoard' && targetElementId === '') {
		clonedData.push({ ...clonedElement, elementId: genId(), sectionId: 'mainBoard' });
		return clonedData;
	}

	if (targetSectionId === 'mainBoard' && targetElementId !== '') {
		const index = clonedData.findIndex(({ elementId }) => elementId === targetElementId);

		if (index === -1) {
			console.error('Target Element not found');
			return;
		}

		clonedData.splice(position === 'up' ? index : index + 1, 0, {
			...clonedElement,
			elementId: genId(),
			sectionId: 'mainBoard'
		});
		return clonedData;
	}

	if (targetSectionId !== 'mainBoard' && targetElementId === '') {
		const section = findSection(clonedData, targetSectionId);

		if (!section) {
			console.error('Target section not found');
			return;
		}

		section.children.push({ ...clonedElement, elementId: genId(), sectionId: targetSectionId });
		return clonedData;
	}

	if (targetSectionId !== 'mainBoard' && targetElementId !== '') {
		const section = findSection(clonedData, targetSectionId);

		if (!section) {
			console.error('Target section not found');
			return;
		}

		const index = section.children.findIndex(({ elementId }) => elementId === targetElementId);

		if (index === -1) {
			console.error('Target Element not found');
			return;
		}

		section.children.splice(position === 'up' ? index : index + 1, 0, {
			...clonedElement,
			elementId: genId(),
			sectionId: targetSectionId
		});
		return clonedData;
	}
};
