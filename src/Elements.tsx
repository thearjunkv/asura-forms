import {
    StyledPhoneNumber,
    StyledText,
    StyledInputNumber,
    StyledTextarea,
    // StyledDropdown,
    // StyledCheckbox,
    // StyledRadio,
    StyledDate,
    StyledTime,
    StyledButton
} from './styles/StyledElements';
import { TTextAttrs, TNumberAttrs, TTextareaAttrs } from './types/FormElements';
import { getUHtmlId } from './utils';

export const PhoneNumber: React.FC<{
    label?: string;
    labelPos?: 'top' | 'left';
    labelStyles?: string;
    elementStyles?: string;
    attrs?: Partial<TTextAttrs>;
    value: string;
    onChange: (value: string) => void;
}> = ({ label, labelPos = 'top', labelStyles, elementStyles, attrs, value, onChange }) => {
    if (attrs) attrs.id = attrs.id || getUHtmlId('input-text', 6);
    return (
        <StyledPhoneNumber labelPos={labelPos} $labelstyles={labelStyles || ''} $elementstyles={elementStyles || ''}>
            {label && <label id={attrs ? attrs.id : undefined}>{label}</label>}
            <input type='text' {...(attrs || {})} value={value} onChange={(e) => onChange(e.target.value)} />
        </StyledPhoneNumber>
    );
};

export const Text: React.FC<{
    label?: string;
    labelPos?: 'top' | 'left';
    labelStyles?: string;
    elementStyles?: string;
    attrs?: Partial<TTextAttrs>;
    value: string;
    onChange: (value: string) => void;
}> = ({ label, labelPos = 'top', labelStyles, elementStyles, attrs, value, onChange }) => {
    if (attrs) attrs.id = attrs.id || getUHtmlId('input-text', 6);
    return (
        <StyledText labelPos={labelPos} $labelstyles={labelStyles || ''} $elementstyles={elementStyles || ''}>
            {label && <label id={attrs ? attrs.id : undefined}>{label}</label>}
            <input type='text' {...(attrs || {})} value={value} onChange={(e) => onChange(e.target.value)} />
        </StyledText>
    );
};

export const InputNumber: React.FC<{
    label?: string;
    labelPos?: 'top' | 'left';
    labelStyles?: string;
    elementStyles?: string;
    attrs?: Partial<TNumberAttrs>;
    value: number;
    onChange: (value: number) => void;
}> = ({ label, labelPos = 'top', labelStyles, elementStyles, attrs, value, onChange }) => {
    if (attrs) attrs.id = attrs.id || getUHtmlId('input-number', 6);

    return (
        <StyledInputNumber labelPos={labelPos} $labelstyles={labelStyles || ''} $elementstyles={elementStyles || ''}>
            {label && <label id={attrs ? attrs.id : undefined}>{label}</label>}
            <input
                type='number'
                {...(attrs || {})}
                value={value}
                onChange={(e) => {
                    const parsed = Number(e.target.value);
                    onChange(parsed);
                }}
            />
        </StyledInputNumber>
    );
};

export const Textarea: React.FC<{
    label?: string;
    labelPos?: 'top' | 'left';
    labelStyles?: string;
    elementStyles?: string;
    attrs?: Partial<TTextareaAttrs>;
    value: string;
    onChange: (value: string) => void;
}> = ({ label, labelPos = 'top', labelStyles, elementStyles, attrs, value, onChange }) => {
    if (attrs) attrs.id = attrs.id || getUHtmlId('input-textarea', 6);

    return (
        <StyledTextarea labelPos={labelPos} $labelstyles={labelStyles || ''} $elementstyles={elementStyles || ''}>
            {label && <label id={attrs ? attrs.id : undefined}>{label}</label>}
            <textarea {...(attrs || {})} value={value} onChange={(e) => onChange(e.target.value)} />
        </StyledTextarea>
    );
};

export const Date: React.FC<{
    label?: string;
    labelPos?: 'top' | 'left';
    labelStyles?: string;
    elementStyles?: string;
    attrs?: Partial<TTextAttrs>;
    value: string;
    onChange: (value: string) => void;
}> = ({ label, labelPos = 'top', labelStyles, elementStyles, attrs, value, onChange }) => {
    if (attrs) attrs.id = attrs.id || getUHtmlId('input-text', 6);
    return (
        <StyledDate labelPos={labelPos} $labelstyles={labelStyles || ''} $elementstyles={elementStyles || ''}>
            {label && <label id={attrs ? attrs.id : undefined}>{label}</label>}
            <input type='date' {...(attrs || {})} value={value} onChange={(e) => onChange(e.target.value)} />
        </StyledDate>
    );
};

export const Time: React.FC<{
    label?: string;
    labelPos?: 'top' | 'left';
    labelStyles?: string;
    elementStyles?: string;
    attrs?: Partial<TTextAttrs>;
    value: string;
    onChange: (value: string) => void;
}> = ({ label, labelPos = 'top', labelStyles, elementStyles, attrs, value, onChange }) => {
    if (attrs) attrs.id = attrs.id || getUHtmlId('input-text', 6);
    return (
        <StyledTime labelPos={labelPos} $labelstyles={labelStyles || ''} $elementstyles={elementStyles || ''}>
            {label && <label id={attrs ? attrs.id : undefined}>{label}</label>}
            <input type='time' {...(attrs || {})} value={value} onChange={(e) => onChange(e.target.value)} />
        </StyledTime>
    );
};

export const Button: React.FC<{
    elementStyles?: string;
    attrs?: Partial<TTextareaAttrs>;
}> = ({ elementStyles, attrs }) => {
    if (attrs) attrs.id = attrs.id || getUHtmlId('button', 6);

    return (
        <StyledButton $elementstyles={elementStyles || ''}>
            <textarea {...(attrs || {})} />
        </StyledButton>
    );
};
