import styled from 'styled-components';

export const StyledProperties = styled.div`
	width: 280px;
	height: 100%;
	overflow: auto;

	position: relative;
	display: flex;
	flex-direction: column;

	.asura-forms__properties-header {
		padding: 0.8em;
	}

	.asura-forms__properties-body {
		overflow: auto;
		padding: 0 0.8em;
		padding-bottom: 0.15em;
	}

	.asura-forms__properties-footer {
		margin-top: auto;
		padding: 0.8em;
	}

	h2 {
		margin: 0;
		font-size: 0.8rem;
		font-weight: normal;
		color: var(--grey-700);
	}

	span.asura-forms__properties-no-select {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		text-align: center;

		font-size: 0.85rem;
		color: var(--grey-600);
	}

	.asura-forms__property-element {
		width: 100%;
		height: auto;

		margin: 1em 0;

		&:first-child {
			margin-top: 0;
		}

		&:last-child {
			margin-bottom: 0;
		}

		& > label {
			display: block;
			margin-bottom: 0.2em;
			font-size: 0.85rem;
			color: var(--grey-900);
		}
	}

	.asura-forms__property-element--error {
		font-size: 0.82rem;
		color: var(--red-color);
	}

	.asura-forms__property-element--toggle {
		display: flex;
		justify-content: space-between;

		& > label {
			margin: 0;
		}
	}

	.asura-forms__property-element-options-header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		& > span {
			font-size: 0.85rem;
			color: var(--grey-900);
		}

		& > button {
			padding: 0.05em 0.8em;
			font-size: 0.75em;

			& > svg {
				margin-right: 0.05em;
			}
		}
	}

	.asura-forms__property-element-options-body {
		& > div {
			margin-top: 0.4em;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		& div > input {
			margin-right: 0.4em;
		}

		& button {
			background-color: transparent;
			border-color: transparent;
			padding: 0.2em 0.2em;
			border-radius: 50px;

			& svg {
				width: 1.4em;
			}

			&:hover {
				background-color: transparent;
				border-color: transparent;
			}
		}

		& > div:first-child > button {
			cursor: not-allowed;

			& svg path {
				fill: var(--grey-400);
			}
		}
	}

	.asura-forms__properties-actions {
		display: flex;
		justify-content: center;

		& > button {
			margin: 0 0.25em;
		}
	}
`;
