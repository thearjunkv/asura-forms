import styled from 'styled-components';

export const StyledWorkspace = styled.div`
	width: calc(100% - 200px - 250px); // calc with with with of picker and properties
	height: 100%;
	padding: 1em;

	background-color: var(--grey-50);
	border-right: 1px solid var(--grey-100);
	border-left: 1px solid var(--grey-100);

	display: flex;
	justify-content: center;
	align-items: flex-start;
`;
