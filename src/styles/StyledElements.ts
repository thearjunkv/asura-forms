import reactSelect from 'react-select';
import styled from 'styled-components';

type Styles = { $styles?: string };

const BaseInput = styled.input``;

export const StyledPhoneNumberWrapper = styled.div<Styles>``;

export const StyledTel = styled(BaseInput).attrs({ type: 'tel' })<Styles>``;

export const StyledText = styled(BaseInput).attrs({ type: 'text' })<Styles>``;

export const StyledInputNumber = styled(BaseInput).attrs({ type: 'number' })<Styles>``;

export const StyledTextarea = styled.textarea<Styles>``;

export const StyledDropdown = styled(reactSelect)<{ $styles?: string }>``;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })<{ $styles?: string }>``;

export const StyledRadio = styled.input.attrs({ type: 'radio' })<{ $styles?: string }>``;

export const StyledDate = styled.input.attrs({ type: 'date' })<{ $styles?: string }>``;

export const StyledTime = styled.input.attrs({ type: 'time' })<{ $styles?: string }>``;

export const StyledButton = styled.button<{ $styles?: string }>``;
