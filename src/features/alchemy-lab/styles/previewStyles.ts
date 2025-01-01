import styled from 'styled-components';

export const StyledPreview = styled.div`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: hsla(0, 0%, 100%, 0.6);
	opacity: 0;
	visibility: hidden;
	transition: opacity 300ms ease, visibility 300ms ease;

	display: flex;
	justify-content: center;
	align-items: flex-start;

	.form-alcmst__preview-modal {
		margin-top: 2.5em;
		padding: 0.8em 1.4em 1.4em;
		width: 80%;
		max-width: 600px;
		height: 100%;
		max-height: calc(100% - 2.5em - 2.5em);
		background-color: var(--white);
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
		overflow: auto;

		transform: translateY(-40px);
		transition: transform 300ms ease;
	}

	&.form-alcmst__preview--show {
		opacity: 1;
		visibility: visible;

		& > .form-alcmst__preview-modal {
			transform: translateY(0);
		}
	}

	.form-alcmst__preview-header > h1 {
		padding: 0;
		margin: 0;
		text-align: center;
		font-size: 1.2rem;
		color: var(--grey-800);
	}

	.form-alcmst__preview-header > button.form-alcmst__btn--secondary {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1em;
		background-color: transparent;
		border: none;

		& svg {
			width: 1.6em;
		}

		&:hover {
			background-color: transparent;
		}
	}

	.form-alcmst__preview-body {
		margin-top: 0.8em;
	}

	.form-alcmst__preview-form-response {
		margin-top: 0.8em;
		padding: 0.8em;
		background-color: var(--grey-200);
		color: var(--grey-800);
		border-radius: 12px;

		& > h2 {
			margin: 0 0 0.8em;
			font-size: 0.9rem;
		}

		& > pre {
			margin: 0;
			font-size: 0.85rem;
		}
	}
`;
