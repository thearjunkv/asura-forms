import { useEffect, useState } from 'react';
import { GlobalStyles } from '../../styles/globalStyles';
import { StyledFormLab } from './styles/formLabStyles';

import Palette from './components/Palette';
import Workspace from './components/Workspace';
import Properties from './components/Properties';

import { TFormLab } from './types';

import DndContextWrapper from './dnd/DndContext';
import DragOverlayWrapper from './dnd/DragOverlay';
import { Theme } from '../../styles/Theme';
import Preview from './components/Preview';
import { useFormLab } from './hooks/useFormLab';

const FormLab: React.FC<TFormLab> = ({ title, height, paletteGridView, onSave, themeOverride, ...props }) => {
	const [togglePreview, setTogglePreview] = useState<boolean>(false);
	const formTitle = title || 'Custom Form';
	const { formData, setFormData } = useFormLab();

	useEffect(() => {
		if (onSave === undefined) console.error('the `onSave` prop is required to save the form data.');
		else if (typeof onSave !== 'function') console.error('The `onSubmit` prop must be a function.');

		if (props.formData !== undefined) {
			if (!Array.isArray(props.formData)) console.error('The `formData` prop must be an array of form elements.');
			else setFormData(props.formData);
		}
	}, [props.formData, onSave, setFormData]);

	return (
		<GlobalStyles>
			<Theme themeOverride={themeOverride}>
				<StyledFormLab
					className='asura-forms__form-lab'
					style={{ height: height && typeof height === 'number' ? `${height}px` : '650px' }}
				>
					<Preview
						formTitle={formTitle}
						isOpen={togglePreview}
						onClose={() => setTogglePreview(false)}
					/>
					<div className='asura-forms__form-lab-header'>
						<h1>
							Form: <span>{formTitle}</span>
						</h1>
						<div>
							<button
								className='asura-forms__btn--secondary'
								onClick={() => setTogglePreview(true)}
							>
								Preview
							</button>
							<button
								className='asura-forms__btn'
								onClick={() => {
									try {
										onSave(formData);
									} catch (e) {
										console.error(e);
									}
								}}
							>
								Save
							</button>
						</div>
					</div>

					<div className='asura-forms__form-lab-body'>
						<DndContextWrapper>
							<Palette paletteGridView={paletteGridView} />
							<Workspace />
							<DragOverlayWrapper />
						</DndContextWrapper>
						<Properties />
					</div>
				</StyledFormLab>
			</Theme>
		</GlobalStyles>
	);
};

export default FormLab;
