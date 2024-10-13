import template from './template';
import styled from 'styled-components';
import { FormElement } from './types/FormElements';

type PickerProps = {
    dStart: (type: FormElement['elementType'], uid: string, isWidget: boolean) => void;
    dStop: () => void;
};

const StyledPicker = styled.div`
    & {
        padding: 0.7em;
        width: 200px;
        background-color: var(--white);
        border-radius: 3px;
    }

    & .title {
        margin: 0.4em 0 0.7em 0.7em;
        font-size: 1rem;
        font-weight: normal;
        color: var(--neutral-color-800);
    }

    & .element {
        margin-top: 0.4em;
        padding: 0.6em 0 0.6em 1em;
        font-size: 0.8rem;
        background-color: transparent;
        color: var(--grey-800);
        border: 1px solid var(--grey-200);
        border-radius: 4px;
        transition: background-color 300ms ease;
    }

    & .element:hover {
        background-color: var(--grey-100);
    }
`;

const Picker: React.FC<PickerProps> = ({ dStart, dStop }: PickerProps) => {
    return (
        <StyledPicker>
            <h2 className='title'>Form Elements</h2>
            {template.map(({ elementType }, i) => (
                <div
                    className='element'
                    key={i}
                    draggable
                    onDragStart={() => dStart(elementType, '', true)}
                    onDragEnd={dStop}
                >
                    {elementType}
                </div>
            ))}
        </StyledPicker>
    );
};

export default Picker;
