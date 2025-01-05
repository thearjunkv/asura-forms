import { useEffect, useRef, useState } from 'react';
import { XIcon } from '../../../assets/Icons';
import { cn } from '../../../utils/helpers';
import { Manifest } from '../../manifest';
import { useFormLab } from '../hooks/useFormLab';
import { StyledPreview } from '../styles/previewStyles';
import { Form } from 'antd';

type TPreview = { formTitle: string; isOpen: boolean; onClose: () => void };

const Preview: React.FC<TPreview> = ({ formTitle, isOpen, onClose }) => {
	const { formData } = useFormLab();
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
			className={cn('asura-forms__preview', isOpen && 'asura-forms__preview--show')}
			onClick={onClose}
		>
			<div
				ref={previewModalRef}
				className='asura-forms__preview-modal'
				onClick={e => e.stopPropagation()}
			>
				<div className='asura-forms__preview-header'>
					<h1>{formTitle}</h1>
					<button
						className='asura-forms__btn--secondary'
						onClick={onClose}
					>
						{XIcon}
					</button>
				</div>
				<div className='asura-forms__preview-body'>
					<div className='asura-forms__preview-form'>
						<Manifest
							formInstance={formInstance}
							formData={formData}
							onSubmit={formValues => setFormSubmission(formValues)}
						/>
					</div>
					{formSubmission !== null && (
						<div className='asura-forms__preview-form-submission'>
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
