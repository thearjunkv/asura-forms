export const genId = () => Date.now() + '-' + Math.random().toString(36).slice(2, 11);

export const genHtmlId = (name: string) => `${name}-${genId()}`;
