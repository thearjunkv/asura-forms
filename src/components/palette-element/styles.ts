import styled from 'styled-components';

export const StyledPaletteElement = styled.div`
	padding: 0.4em 0.8em;
	font-size: 0.75rem;
	font-size: 0.7em;
	background-color: var(--white);
	border: 1px solid var(--grey-200);
	border-radius: 6px;
	display: flex;
	align-items: center;
	transition: background-color 120ms ease;
	overflow: hidden;
	cursor: grab;

	&:hover {
		background-color: var(--grey-100);
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	svg {
		width: 20px;
	}

	svg path {
		fill: var(--grey-900);
	}

	span {
		margin-left: 0.7em;
		color: var(--grey-900);
	}

	&.form-alcmst__palette-element--vertical-card {
		padding: 0.8em;
		width: 75px;
		height: 75px;
		flex-direction: column;
		justify-content: center;

		span {
			margin-left: 0;
			margin-top: 0.2em;
			width: 100%;
			text-align: center;
		}
	}
`;
