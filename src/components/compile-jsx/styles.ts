import styled from 'styled-components';

export const StyledCompileJsx = styled.div`
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0;
		font-weight: normal;
	}

	h1 {
		font-size: 1.6rem;
	}

	h2 {
		font-size: 1.3rem;
	}

	h3 {
		font-size: 1rem;
	}

	h4,
	h5,
	h6 {
		font-size: 0.9rem;
	}

	p {
		font-size: 0.9rem;
	}

	.form-alcmst__board-element {
		margin: 0.5em 0; // for non-overlay

		padding: 1em;
		background-color: var(--grey-50);
		border: 1px solid var(--grey-200);
		border-radius: 6px;
		cursor: grab;

		position: relative;
		z-index: 10;

		min-height: 5em;
		width: 100%;
		display: flex;
		align-items: center;

		& > div {
			width: 100%; // For separator and spacer field
		}
	}

	.form-alcmst__board-element--dragging-overlay {
		margin: 0;
	}

	.form-alcmst__board-element--section {
		padding: 2em 1em 0.5em 1em;
	}

	.form-alcmst__board-element--section-drag-over {
		box-shadow: 0 0 0 2px var(--grey-800);
	}

	.form-alcmst__board-element--dragging {
		opacity: 0.4;

		&.form-alcmst__board-element--section-drag-over {
			box-shadow: none;
		}

		& .form-alcmst__board-element-top--drag-over::before,
		& .form-alcmst__board-element-bottom--drag-over::before {
			display: none;
		}
	}

	.form-alcmst__board-element--dragging-overlay {
		opacity: 0.9;
	}

	.form-alcmst__board-element-top,
	.form-alcmst__board-element-bottom {
		position: absolute;
		z-index: 15;
		overflow: hidden;

		left: 0;
		height: 50%;
		width: 100%;
		background-color: hsla(0, 0%, 100%, 0);
	}

	.form-alcmst__board-element-top {
		top: 0;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	.form-alcmst__board-element-bottom {
		top: 50%;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.form-alcmst__board-element:hover > .form-alcmst__board-element-top,
	.form-alcmst__board-element:hover > .form-alcmst__board-element-bottom {
		background-color: hsla(0, 0%, 100%, 0.6);
	}

	.form-alcmst__board-element:hover > .form-alcmst__board-element-btn-delete {
		opacity: 1;
	}

	.form-alcmst__board-element--section {
		&.form-alcmst__board-element:hover > .form-alcmst__board-element-top,
		&.form-alcmst__board-element:hover > .form-alcmst__board-element-bottom {
			background-color: hsla(0, 0%, 100%, 0);
		}
	}

	.form-alcmst__board-element--block-hover {
		&.form-alcmst__board-element:hover > .form-alcmst__board-element-top,
		&.form-alcmst__board-element:hover > .form-alcmst__board-element-bottom {
			background-color: hsla(0, 0%, 100%, 0);
		}

		&.form-alcmst__board-element:hover > .form-alcmst__board-element-btn-delete {
			opacity: 0;
		}
	}

	.form-alcmst__board-element-top--drag-over::before,
	.form-alcmst__board-element-bottom--drag-over::before {
		content: '';
		position: absolute;
		left: 0;
		display: block;
		width: 100%;
		height: 0.4em;
		background-color: var(--grey-800);
	}

	.form-alcmst__board-element-bottom--drag-over::before {
		bottom: 0;
	}

	.form-alcmst__board-element-top--dragging,
	.form-alcmst__board-element-bottom--dragging {
		background-color: hsla(0, 0%, 100%, 0) !important;
	}

	.form-alcmst__board-element-btn-delete {
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

		&.form-alcmst__board-element-btn-delete--dragging {
			opacity: 0 !important;
		}

		&:hover {
			background-color: var(--red-color);
		}
	}

	.form-alcmst__board-element-btn-delete--section {
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

	.form-alcmst__board-element-spacer-info {
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

	.form-alcmst__board-element-section-info {
		position: absolute;
		z-index: 12;

		top: 0;
		left: 0;
		width: auto;
		height: auto;
		padding: 0.3em 0 0 1em;

		& > span {
			font-size: 0.8rem;
			color: var(--grey-800);
		}
	}

	.form-alcmst__element-wrapper > label {
		display: block;
		margin-bottom: 0.2em;
		font-size: 0.9rem;
	}

	.form-alcmst__element-wrapper--required > label::after {
		content: '*';
		margin-left: 0.1em;
		color: var(--red-color);
	}

	.form-alcmst__element-title {
	}

	.form-alcmst__element-paragraph {
	}

	.form-alcmst__element-separator {
	}
`;
