export function generateUniqueId() {
	return 'id-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

export const getUHtmlId = (name: string, len?: number) => `${name}-${getUid(len)}`;
