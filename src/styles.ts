import styled from 'styled-components';

export const GlobalStyles = styled.div`
	--white: hsl(0, 0%, 100%);
	--black: hsl(0, 0%, 0%);

	--red-color: hsl(0, 100%, 45%);
	--red-color-light: hsl(0, 80%, 53%);

	--grey-50: hsl(0, 0%, 97.5%);
	--grey-100: hsl(0, 0%, 95%);
	--grey-200: hsl(0, 0%, 88%);
	--grey-300: hsl(0, 0%, 82%);
	--grey-400: hsl(0, 0%, 75%);
	--grey-500: hsl(0, 0%, 63%);
	--grey-600: hsl(0, 0%, 50%);
	--grey-700: hsl(0, 0%, 38%);
	--grey-800: hsl(0, 0%, 25%);
	--grey-900: hsl(0, 0%, 10%);
	--grey-1000: hsl(0, 0%, 4%);

	width: 100%;
	height: auto;

	background-color: var(--white);
	color: var(--grey-900);
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	font-size: 1rem;
	font-weight: 400;
	font-synthesis: none;

	text-rendering: optimizeSpeed;
	line-height: 1.5;
	letter-spacing: 0.007em;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html:focus-within {
		scroll-behavior: smooth;
	}

	input,
	button,
	textarea,
	select {
		font: inherit;
		letter-spacing: inherit;
	}

	::-webkit-input-placeholder {
		// update config provider as well
		color: var(--grey-600);
	}

	:-ms-input-placeholder {
		color: var(--grey-600);
	}

	::-moz-placeholder {
		color: var(--grey-600);
	}

	::placeholder {
		color: var(--grey-600);
	}

	@media (prefers-reduced-motion: reduce) {
		html:focus-within {
			scroll-behavior: auto;
		}

		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	/* For WebKit browsers (Chrome, Safari, Edge) */
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}

	::-webkit-scrollbar-track {
		background-color: var(--grey-100);
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--grey-300);
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: var(--grey-300);
	}

	* {
		scrollbar-width: thin;
		scrollbar-color: var(--grey-300) var(--grey-100);
	}

	// common styles

	button {
		padding: 0.25em 0.85em;
		font-size: 0.82rem;
		background-color: var(--grey-900);
		color: var(--white);
		border: 1px solid var(--grey-900);
		border-radius: 6px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		& svg {
			margin-right: 0.4em;
			width: 1.15em;
			display: flex;
		}

		& svg path {
			fill: var(--white);
		}
	}

	.ant-input-number,
	.ant-select,
	.ant-picker {
		width: 100%;
	}

	.form-alcmst__element-wrapper {
		width: 100%;
		height: auto;
	}

	.form-alcmst__element-wrapper > label {
		display: block;
		width: 100%;
		margin-bottom: 0.2em;
		font-size: 0.9rem;
		color: var(--grey-900);
	}

	.form-alcmst__element-wrapper--required > label::after {
		content: '*';
		margin-left: 0.1em;
		color: var(--red-color);
	}

	.ant-input,
	.ant-input-number {
		width: 100%;
		height: auto;
		padding: 0.4em 0.6em;
		border: 1px solid var(--grey-200);
		border-radius: 4px;

		font-size: 0.9rem;
		color: var(--grey-900);
		text-align: left;
		line-height: 1.5;

		background-color: var(--white);
		background-image: none;
		appearance: none;

		cursor: text;
		outline: none;
		transition: outline-color 120ms ease-in;

		box-shadow: none;
		outline: 2px solid transparent;
		outline-offset: 2px;

		resize: none;

		&:focus {
			outline-color: var(--grey-500);
		}

		&:disabled {
			background-color: var(--grey-50);
			cursor: not-allowed;
		}
	}

	.ant-input-number {
		padding: 0;
		/* overflow: hidden; */

		& .ant-input-number-input {
			border-radius: 3px;
			padding: 0.4em 0.6em;
			box-shadow: none;
			outline: 2px solid transparent;
			outline-offset: 2.5px;
		}

		& .ant-input-number-input:focus {
			outline-color: var(--grey-500);
		}

		& .ant-input-number-input:disabled {
			background-color: var(--grey-50);
			cursor: not-allowed;
		}

		& .ant-input-number-handler-wrap {
			border-top-right-radius: 3px;
			border-bottom-right-radius: 3px;
			overflow: hidden;

			& > span {
				height: 50%;
				border-radius: 0;
			}
		}

		& .ant-input-number-handler-up,
		& .ant-input-number-handler-down {
			background-color: var(--grey-50);
			transition: background-color 120ms ease-in;
		}

		& .ant-input-number-handler-up svg,
		& .ant-input-number-handler-down svg {
			fill: var(--grey-600);
			transition: fill 120ms ease-in;
		}

		& .ant-input-number-handler-up:hover,
		& .ant-input-number-handler-down:hover {
			background-color: var(--grey-100);
			& svg {
				fill: var(--grey-800);
			}
		}
	}
`;
