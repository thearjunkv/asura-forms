import styled from 'styled-components';

export const StyledBoardElement = styled.div`
	&.form-alcmst__board-element {
		width: 100%;
		min-height: 5em;
		padding: 1em;
		display: flex;
		align-items: center;

		background-color: var(--white);
		border: 1px solid transparent;
		border-radius: 6px;
		cursor: grab;

		position: relative;
		z-index: 10;

		& > div {
			width: 100%; // For separator and spacer field
		}

		&:hover {
			border-color: var(--grey-200);
		}
	}

	& > .form-alcmst__board-element-spacer-info {
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

	& > .form-alcmst__board-element-section-info {
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

	&.form-alcmst__board-element--drag-original {
		opacity: 0.4;
	}

	&.form-alcmst__board-element--drag-overlay {
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

	&.form-alcmst__board-element--section {
		padding: 2.4em 1em 1em 1em;
		border-color: var(--grey-200);
	}

	&.form-alcmst__board-element--section-drag-over {
		box-shadow: inset 0 0 0 2px var(--grey-800);
	}

	&.form-alcmst__board-element--drag-original {
		&.form-alcmst__board-element--section-drag-over {
			box-shadow: none;
		}
	}

	& > .form-alcmst__board-element-top-half,
	& > .form-alcmst__board-element-bottom-half {
		position: absolute;
		z-index: 14;
		overflow: hidden;

		left: 0;
		height: 50%;
		width: 100%;
		background-color: hsla(0, 0%, 100%, 0);
	}

	& > .form-alcmst__board-element-top-half {
		top: 0;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	& > .form-alcmst__board-element-bottom-half {
		top: 50%;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	&.form-alcmst__board-element:hover > .form-alcmst__board-element-top-half,
	&.form-alcmst__board-element:hover > .form-alcmst__board-element-bottom-half {
		background-color: hsla(0, 0%, 100%, 0.6);
	}

	&.form-alcmst__board-element--section {
		&:hover > .form-alcmst__board-element-top-half,
		&:hover > .form-alcmst__board-element-bottom-half {
			background-color: hsla(0, 0%, 100%, 0);
		}

		& > .form-alcmst__board-element-top-half {
			height: 1.5em;
		}

		& > .form-alcmst__board-element-bottom-half {
			top: auto;
			bottom: 0;
			height: 1.5em;
		}
	}

	&.form-alcmst__board-element--section-filled {
		& > .form-alcmst__board-element-top-half {
			height: 2.6em;
		}

		& > .form-alcmst__board-element-bottom-half {
			height: 1.2em;
		}
	}

	& > .form-alcmst__board-element-top-half--drag-over::before,
	& > .form-alcmst__board-element-bottom-half--drag-over::before {
		content: '';
		position: absolute;
		z-index: 16;

		left: 0;
		width: 100%;
		height: 0.35em;
		background-color: var(--grey-800);
	}

	& > .form-alcmst__board-element-top-half--drag-over::before {
		top: 0;
	}

	& > .form-alcmst__board-element-bottom-half--drag-over::before {
		bottom: 0;
	}

	&.form-alcmst__board-element--drag-original {
		& .form-alcmst__board-element-top-half--drag-over::before,
		& .form-alcmst__board-element-bottom-half--drag-over::before {
			display: none;
		}
	}

	& > .form-alcmst__board-element-btn-delete {
		position: absolute;
		z-index: 18;

		top: 0;
		right: 0;
		height: 100%;
		background-color: var(--red-color-light);
		border-color: var(--red-color-light);
		border-radius: 5px;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;

		opacity: 0;

		& > svg {
			margin: 0;
			font-size: 1.1rem;
		}

		&:hover {
			background-color: var(--red-color);
		}
	}

	& > .form-alcmst__board-element-btn-delete--section {
		top: 0.4em;
		right: 0.4em;
		padding: 0;
		width: 2em;
		height: 2em;
		border-radius: 4px;

		& > svg {
			margin: 0;
			font-size: 0.8rem;
		}
	}

	&.form-alcmst__board-element:hover > .form-alcmst__board-element-btn-delete {
		opacity: 1;
	}

	&.form-alcmst__board-element--block-hover-effect {
		&:hover > .form-alcmst__board-element-top-half,
		&:hover > .form-alcmst__board-element-bottom-half {
			background-color: hsla(0, 0%, 100%, 0);
		}

		&:hover > .form-alcmst__board-element-btn-delete {
			opacity: 0;
		}

		&:hover {
			border-color: transparent;
		}
	}
`;
