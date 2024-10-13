import styled from 'styled-components';
import { FormElement } from './types/FormElements';

type DropZProps = {
    dStart: (type: FormElement['elementType'], uid: string, isWidget: boolean) => void;
    dStop: () => void;
    data: FormElement[];
    // updateData:
};

const StyledDropZ = styled.div`
    & {
        padding: 0.7em;
        width: 200px;
        background-color: var(--white);
        border-radius: 3px;
    }
`;

const DropZ: React.FC<DropZProps> = ({ dStart, dStop, data }: DropZProps) => {
    return <StyledDropZ>{/* <GenHtml data={data} /> */}</StyledDropZ>;
};

export default DropZ;
