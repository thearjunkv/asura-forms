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
			width: 100%;
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
		padding: 0.2em 0 0 1em;

		& > span {
			font-size: 0.8rem;
			color: var(--grey-800);
		}
	}

	.form-alcmst__board-element-top,
	.form-alcmst__board-element-bottom {
		position: absolute;
		z-index: 15;

		left: 0;
		height: 50%;
		width: 100%;
		background-color: var(--white);
		opacity: 0;

		transition: opacity 120ms ease;
	}

	.form-alcmst__board-element:hover > .form-alcmst__board-element-top,
	.form-alcmst__board-element:hover > .form-alcmst__board-element-bottom {
		opacity: 0.7;
	}

	.form-alcmst__board-element-top--dragging,
	.form-alcmst__board-element-bottom--dragging {
		opacity: 0 !important;
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
