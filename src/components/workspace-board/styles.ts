import styled from 'styled-components';

export const StyledWorkspaceBoard = styled.div`
	min-height: 100%;
	width: 85%;

	padding: 0.5em 1em;
	background-color: var(--white);
	border: 1px solid var(--white);
	border-radius: 6px;

	position: relative;
	transition: box-shadow 120ms ease;

	&.form-alcmst__workspace-board--empty {
		& .form-alcmst__workspace-board-drop-message {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 1.2rem;
			color: var(--grey-600);
		}

		&.form-alcmst__workspace-board--hovered .form-alcmst__workspace-board-drop-message {
			display: none;
		}
	}

	&.form-alcmst__workspace-board--hovered {
		box-shadow: 0 0 0 2px var(--grey-800);
	}

	.form-alcmst__board-element {
		margin: 0.5em 0;
	}
`;
