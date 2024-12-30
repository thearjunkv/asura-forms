import { XIcon } from '../../../assets/Icons';
import { cn } from '../../../utils/helpers';
import { Manifest } from '../../manifest';
import { useAlchemyLab } from '../hooks/useAlchemyLab';
import { StyledPreview } from '../styles/previewStyles';

type TPreview = { formTitle: string; isOpen: boolean; onClose: () => void };

const Preview: React.FC<TPreview> = ({ formTitle, isOpen, onClose }) => {
	const { data } = useAlchemyLab();

	return (
		<StyledPreview
			className={cn('form-alcmst__preview', isOpen && 'form-alcmst__preview--show')}
			onClick={onClose}
		>
			<div
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
					{isOpen && (
						<Manifest
							data={data}
							onSubmit={formValues => console.log(formValues)}
						/>
					)}
				</div>
			</div>
		</StyledPreview>
	);
};

export default Preview;
