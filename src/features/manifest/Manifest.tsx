import { Form } from 'antd';
import { TManifest } from './types';
import CompileElement from './components/CompileElement';
import { useEffect, useState } from 'react';
import { Element } from '../../types/Element';
import { Theme } from '../../styles/Theme';
import { GlobalStyles } from '../../styles/globalStyles';

const Manifest: React.FC<TManifest> = ({ formInstance, onSubmit, ...props }) => {
	const [formData, setFormData] = useState<Element[]>([]);

	useEffect(() => {
		if (onSubmit && typeof onSubmit !== 'function') console.error('The `onSubmit` prop must be a function.');
		if (props.formData !== undefined) {
			if (!Array.isArray(props.formData)) console.error('The `formData` prop must be an array of form elements.');
			else setFormData(props.formData);
		}
	}, [props.formData, onSubmit]);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onFinish = (values: any) => {
		try {
			onSubmit(values);
		} catch (_e) {
			console.error('the `onSubmit` is required to get the form values.');
		}
	};

	return (
		<GlobalStyles>
			<Theme>
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
