import { FormInstance, ThemeConfig } from 'antd';
import { Element } from '../../types/Element';

export type TManifest = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	formInstance?: FormInstance<any>;
	themeOverride?: ThemeConfig;
	formData: Element[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onSubmit: (formValues: { [key: string]: any }) => void;
};
