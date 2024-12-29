export const cn = (...classes: (string | undefined | null | boolean)[]) => classes.filter(Boolean).join(' ');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const clone = (data: any) => JSON.parse(JSON.stringify(data));

export const genId = () => Date.now() + '-' + Math.random().toString(36).slice(2, 11);
