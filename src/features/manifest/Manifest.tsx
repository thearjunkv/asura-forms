import { Form } from 'antd';
import { TManifest } from './types';
import CompileElement from './components/CompileElement';
import { useEffect, useState } from 'react';
import { Element } from '../../types/Element';
import { Theme } from '../../styles/Theme';
import { GlobalStyles } from '../../styles/globalStyles';

const Manifest: React.FC<TManifest> = ({ formInstance, onSubmit, themeOverride, ...props }) => {
	const [formData, setFormData] = useState<Element[]>([]);

	useEffect(() => {
		if (onSubmit === undefined) console.error('the `onSubmit` prop is required to get the form values.');
		else if (typeof onSubmit !== 'function') console.error('The `onSubmit` prop must be a function.');

		if (props.formData === undefined) console.error('The `formData` prop is required.');
		else if (!Array.isArray(props.formData))
			console.error('The `formData` prop must be an array of form elements.');
		else setFormData(props.formData);
	}, [props.formData, onSubmit]);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onFinish = (values: any) => {
		try {
			onSubmit(values);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<GlobalStyles>
			<Theme themeOverride={themeOverride}>
				<Form
					layout='vertical'
					form={formInstance}
					onFinish={onFinish}
				>
					{formData.map((el, i) => (
						<CompileElement
							element={el}
							key={i}
							nestedAttrList={[]}
						/>
					))}
				</Form>
			</Theme>
		</GlobalStyles>
	);
};

export default Manifest;
