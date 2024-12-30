import { Form } from 'antd';
import { TManifest } from './types';
import CompileElement from './components/CompileElement';

const Manifest: React.FC<TManifest> = ({ data, onSubmit }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onFinish = (values: any) => onSubmit(values);
	return (
		<div>
			<Form
				layout='vertical'
				onFinish={onFinish}
			>
				{data.map((el, i) => (
					<CompileElement
						element={el}
						key={i}
					/>
				))}
			</Form>
		</div>
	);
};

export default Manifest;
