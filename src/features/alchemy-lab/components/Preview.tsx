import { useEffect, useRef, useState } from 'react';
import { XIcon } from '../../../assets/Icons';
import { cn } from '../../../utils/helpers';
import { Manifest } from '../../manifest';
import { useAlchemyLab } from '../hooks/useAlchemyLab';
import { StyledPreview } from '../styles/previewStyles';
import { Form } from 'antd';

type TPreview = { formTitle: string; isOpen: boolean; onClose: () => void };

const Preview: React.FC<TPreview> = ({ formTitle, isOpen, onClose }) => {
	const { formData } = useAlchemyLab();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [formSubmission, setFormSubmission] = useState<{ [key: string]: any } | null>(null);
	const previewModalRef = useRef<HTMLDivElement>(null);
	const [formInstance] = Form.useForm();

	useEffect(() => {
		if (isOpen) {
			formInstance.resetFields();
			setFormSubmission(null);
		}
	}, [isOpen, formInstance]);

	useEffect(() => {
		if (isOpen && previewModalRef.current) {
			previewModalRef.current.scrollTop = 0;
		}
	}, [isOpen]);

	return (
		<StyledPreview
			className={cn('form-alcmst__preview', isOpen && 'form-alcmst__preview--show')}
			onClick={onClose}
		>
			<div
				ref={previewModalRef}
				className='form-alcmst__preview-modal'
				onClick={e => e.stopPropagation()}
			>
				<div className='form-alcmst__preview-header'>
					<h1>{formTitle}</h1>
					<button
						className='form-alcmst__btn--secondary'
						onClick={onClose}
					>
						{XIcon}
					</button>
				</div>
				<div className='form-alcmst__preview-body'>
					<div className='form-alcmst__preview-form'>
						<Manifest
							formInstance={formInstance}
							formData={formData}
							onSubmit={formValues => setFormSubmission(formValues)}
						/>
					</div>
					{formSubmission !== null && (
						<div className='form-alcmst__preview-form-submission'>
							<h2>Form Submission</h2>
							<pre>{JSON.stringify(formSubmission, null, 2)}</pre>
						</div>
					)}
				</div>
			</div>
		</StyledPreview>
	);
};

export default Preview;
