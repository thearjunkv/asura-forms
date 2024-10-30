import styled from 'styled-components';

export const StyledPalette = styled.div`
	padding: 0.8em;
	width: 200px;
	height: 100%;
	overflow: auto;

	h2 {
		margin: 0;
		font-size: 0.7rem;
		font-weight: normal;
		color: var(--grey-700);
	}

	& > div {
		margin-top: 0.4em;
		margin-bottom: 1em;
		width: 100%;
	}

	& > div > div {
		margin-top: 0.4em;
	}

	&.form-alcmst__palette--grid-view > div {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		place-items: center;
		gap: 0.2em;
	}
`;
