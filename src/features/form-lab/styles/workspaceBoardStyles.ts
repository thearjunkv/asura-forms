import styled from 'styled-components';

export const StyledWorkspaceBoard = styled.div`
	width: 90%;
	height: 100%;
	overflow: auto;

	background-color: var(--white);
	border-radius: 12px;

	position: relative;
	transition: box-shadow 300ms ease;

	& > div {
		min-width: 300px;
	}

	&.asura-forms__workspace-board--empty {
		& .asura-forms__workspace-board-drop-message {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 1.04rem;
			color: var(--grey-600);
		}

		&.asura-forms__workspace-board--drag-over .asura-forms__workspace-board-drop-message {
			display: none;
		}
	}

	&.asura-forms__workspace-board--drag-over {
		box-shadow: 0 0 0 2px var(--grey-800);
	}
`;
