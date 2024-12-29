import { XIcon } from '../../../assets/Icons';
import { cn } from '../../../utils/helpers';
import { StyledPreview } from '../styles/previewStyles';
import { TPreview } from '../types';

const Preview: React.FC<TPreview> = ({ formTitle, isOpen, onClose }) => {
	return (
		<StyledPreview className={cn('form-alcmst__preview', isOpen && 'form-alcmst__preview--show')}>
			<div className='form-alcmst__preview-modal'>
				<header>
					<h1>{formTitle}</h1>
					<button
						className='form-alcmst__btn--secondary'
						onClick={onClose}
					>
						{XIcon}
					</button>
				</header>
				<main></main>
			</div>
		</StyledPreview>
	);
};

export default Preview;
