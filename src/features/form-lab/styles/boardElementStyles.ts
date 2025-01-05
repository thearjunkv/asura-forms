import styled from 'styled-components';

export const StyledBoardElement = styled.div`
	&.asura-forms__board-element {
		width: 100%;
		min-height: 5em;
		padding: 1em;
		display: flex;
		align-items: center;

		background-color: var(--white);
		border: 1px solid transparent;
		border-radius: 12px;
		cursor: grab;

		position: relative;
		z-index: 10;
		overflow: hidden;

		& > div {
			width: 100%; // For separator and spacer field
		}

		&:hover {
			border-color: var(--grey-200);
		}
	}

	& > .asura-forms__board-element-spacer-info {
		position: absolute;
		z-index: 12;

		top: 0;
		left: 0;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& > span {
			font-size: 0.75rem;
		}
	}

	& > .asura-forms__board-element-section-info {
		position: absolute;
		z-index: 12;

		top: 0;
		left: 0;
		padding: 0.3em 0 0 1em;

		& > span {
			font-size: 0.8rem;
			color: var(--grey-800);
		}
	}

	&.asura-forms__board-element--drag-original {
		opacity: 0.4;
	}

	&.asura-forms__board-element--drag-overlay {
		opacity: 0.9;
		border-color: var(--grey-200);

		&::before {
			content: '';
			position: absolute;
			z-index: 30;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: transparent;
		}
	}

	&.asura-forms__board-element--section {
		padding: 2.4em 1em 1em 1em;
		border-color: var(--grey-200);
	}

	&.asura-forms__board-element--section-drag-over {
		box-shadow: inset 0 0 0 2px var(--grey-800);
	}

	&.asura-forms__board-element--drag-original {
		&.asura-forms__board-element--section-drag-over {
			box-shadow: none;
		}
	}

	& > .asura-forms__board-element-top-half,
	& > .asura-forms__board-element-bottom-half {
		position: absolute;
		z-index: 14;
		overflow: hidden;

		left: 0;
		height: 50%;
		width: 100%;
		background-color: hsla(0, 0%, 100%, 0);
	}

	& > .asura-forms__board-element-top-half {
		top: 0;
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
	}

	& > .asura-forms__board-element-bottom-half {
		top: 50%;
		border-bottom-left-radius: 12px;
		border-bottom-right-radius: 12px;
	}

	&.asura-forms__board-element:hover > .asura-forms__board-element-top-half,
	&.asura-forms__board-element:hover > .asura-forms__board-element-bottom-half {
		background-color: hsla(0, 0%, 100%, 0.6);
	}

	&.asura-forms__board-element--section {
		&:hover > .asura-forms__board-element-top-half,
		&:hover > .asura-forms__board-element-bottom-half {
			background-color: hsla(0, 0%, 100%, 0);
		}

		& > .asura-forms__board-element-top-half {
			height: 1.5em;
		}

		& > .asura-forms__board-element-bottom-half {
			top: auto;
			bottom: 0;
			height: 1.5em;
		}
	}

	&.asura-forms__board-element--section-filled {
		& > .asura-forms__board-element-top-half {
			height: 2.6em;
		}

		& > .asura-forms__board-element-bottom-half {
			height: 1.2em;
		}
	}

	& > .asura-forms__board-element-top-half--drag-over::before,
	& > .asura-forms__board-element-bottom-half--drag-over::before {
		content: '';
		position: absolute;
		z-index: 16;

		left: 0;
		width: 100%;
		height: 0.35em;
		background-color: var(--grey-800);
	}

	& > .asura-forms__board-element-top-half--drag-over::before {
		top: 0;
	}

	& > .asura-forms__board-element-bottom-half--drag-over::before {
		bottom: 0;
	}

	&.asura-forms__board-element--drag-original {
		& .asura-forms__board-element-top-half--drag-over::before,
		& .asura-forms__board-element-bottom-half--drag-over::before {
			display: none;
		}
	}

	& > .asura-forms__board-element-btn-delete {
		position: absolute;
		z-index: 18;

		top: 0;
		right: 0;
		height: 100%;
		padding: 0 0.8em;
		background-color: var(--red-color-light);
		border: none;
		border-radius: 12px;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: background-color 300ms ease;

		opacity: 0;

		& > svg {
			width: 1.4em;
		}

		& > svg path {
			fill: var(--white);
		}

		&:hover {
			background-color: var(--red-color);
		}
	}

	& > .asura-forms__board-element-btn-delete--section {
		top: 0.4em;
		right: 0.4em;
		padding: 0;
		width: 2em;
		height: 2em;
		border-radius: 8px;

		& > svg {
			width: 1.2em;
		}
	}

	&.asura-forms__board-element:hover > .asura-forms__board-element-btn-delete {
		opacity: 1;
	}

	&.asura-forms__board-element--block-hover-effect {
		&:hover > .asura-forms__board-element-top-half,
		&:hover > .asura-forms__board-element-bottom-half {
			background-color: hsla(0, 0%, 100%, 0);
		}

		&:hover > .asura-forms__board-element-btn-delete {
			opacity: 0;
		}

		&:hover {
			border-color: transparent;
		}
	}
`;
