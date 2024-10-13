import { useEffect, useRef, useState } from 'react';
import { ElementEditor } from './types/Builder';
import { FormElement } from './types/FormElements';
import styled from 'styled-components';
import Picker from './Picker';

type BuilerProps = {
    formData?: FormElement[];
    onSave: (formData: FormElement[]) => void;
};

type DragElement = {
    type: FormElement['elementType'];
    uid: string;
    isWidget: boolean;
} | null;

type DStart = { type: FormElement['elementType']; uid: string; isWidget: boolean };

const StyledBuilder = styled.div``;

const Builder: React.FC<BuilerProps> = (props) => {
    const [formData, setFormData] = useState<FormElement[]>(() => props.formData || []);

    const [dragElement, setDragElement] = useState<DragElement>(null);
    const dropZoneRef = useRef<HTMLDivElement>(null);

    // const [elementEditor, setElementEditor] = useState<ElementEditor>({ show: false, element: null });

    // useEffect(() => {
    //     if (props.formData && Array.isArray(props.formData)) setFormData(props.formData);
    // }, [props.formData]);

    // useEffect(() => {
    //     if (formData.length === 0) dropZoneRef.current?.classList.add('empty');
    //     else dropZoneRef.current?.classList.remove('empty');
    // }, [formData]);

    const dragStart = (props: DStart) => setDragElement(props);
    const dragEnd = () => setDragElement(null);

    return (
        <StyledBuilder>
            <Picker dStart={(type, uid, isWidget) => dragStart({ type, uid, isWidget })} dStop={dragEnd} />
        </StyledBuilder>
    );
};

export default Builder;
