import styled from 'styled-components';

export const StyledWorkspace = styled.div`
	padding: 1em 0;
	height: 100%;
	width: 100%;
	background-color: var(--grey-50);
	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		width: 80%;
		height: 100%;
	}

	.form-alcmst__workspace-board {
		padding: 0.5em 1em;
		width: 100%;
		height: 100%;
		background-color: var(--white);
		border: 1px solid var(--white);
		border-radius: 6px;
		overflow: auto;
	}

	.form-alcmst__workspace-board--empty {
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 1.2rem;
		color: var(--grey-600);

		&.form-alcmst__workspace-board--hovered > span {
			display: none;
		}
	}

	.form-alcmst__workspace-board--hovered {
		border-color: var(--grey-500);
	}

	.form-alcmst__board-element {
		margin: 0.5em 0;
	}
`;
