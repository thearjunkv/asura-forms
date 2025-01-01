import { useEffect, useState } from 'react';
import { GlobalStyles } from '../../styles/globalStyles';
import { StyledAlchemyLab } from './styles/alchemyLabStyles';

import Palette from './components/Palette';
import Workspace from './components/Workspace';
import Properties from './components/Properties';

import { TAlchemyLab } from './types';

import DndContextWrapper from './dnd/DndContext';
import DragOverlayWrapper from './dnd/DragOverlay';
import { Theme } from '../../styles/Theme';
import Preview from './components/Preview';
import { useAlchemyLab } from './hooks/useAlchemyLab';

const AlchemyLab: React.FC<TAlchemyLab> = ({ title, height, paletteGridView, onSave, ...props }) => {
	const [togglePreview, setTogglePreview] = useState<boolean>(false);
	const formTitle = title || 'Custom Form';
	const { formData, setFormData } = useAlchemyLab();

	useEffect(() => {
		if (onSave === undefined) console.error('the `onSave` prop is required to save the form data.');
		else if (typeof onSave !== 'function') console.error('The `onSubmit` prop must be a function.');

		if (props.formData !== undefined) {
			if (!Array.isArray(props.formData)) console.error('The `formData` prop must be an array of form elements.');
			else setFormData(props.formData);
		}
	}, [props.formData, onSave, setFormData]);

	return (
		<Theme>
			<GlobalStyles>
				<StyledAlchemyLab
					className='form-alcmst__alchemy-lab'
					style={{ height: height ? `${height}px` : '650px' }}
				>
					<Preview
						formTitle={formTitle}
						isOpen={togglePreview}
						onClose={() => setTogglePreview(false)}
					/>
					<div className='form-alcmst__alchemy-lab-header'>
						<h1>
							Form: <span>{formTitle}</span>
						</h1>
						<div>
							<button
								className='form-alcmst__btn--secondary'
								onClick={() => setTogglePreview(true)}
							>
								Preview
							</button>
							<button
								className='form-alcmst__btn'
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

					<div className='form-alcmst__alchemy-lab-body'>
						<DndContextWrapper>
							<Palette paletteGridView={paletteGridView} />
							<Workspace />
							<DragOverlayWrapper />
						</DndContextWrapper>
						<Properties />
					</div>
				</StyledAlchemyLab>
			</GlobalStyles>
		</Theme>
	);
};

export default AlchemyLab;
