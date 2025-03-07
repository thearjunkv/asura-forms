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

	.asura-forms__btn,
	.asura-forms__btn--secondary,
	.asura-forms__btn--outlined {
		padding: 0.4em 1em;
		font-size: 0.84rem;
		color: var(--white);
		background-color: var(--grey-900);
		border: 1px solid var(--grey-900);
		border-radius: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		&:hover {
			background-color: var(--grey-800);
			border-color: var(--grey-800);
		}

		& > svg {
			width: 1.2em;
		}

		& > svg path {
			fill: var(--white);
		}
	}

	.asura-forms__btn--secondary {
		color: var(--grey-900);
		background-color: var(--grey-200);
		border-color: var(--grey-200);

		&:hover {
			background-color: var(--grey-300);
			border-color: var(--grey-300);
		}

		& svg path {
			fill: var(--grey-900);
		}
	}

	.asura-forms__btn--outlined {
		color: var(--grey-900);
		background-color: var(--white);

		&:hover {
			color: var(--white);
			background-color: var(--grey-900);
			border-color: var(--grey-900);
		}
	}

	.asura-forms__required-asterisk::after {
		content: '*';
		margin-left: 0.1em;
		color: var(--red-color);
	}

	.ant-form-item-required {
		&::after {
			content: '*' !important;
			visibility: visible !important;
			margin-left: 0.2em !important;
			color: var(--red-color) !important;
		}

		&::before {
			margin: 0 !important;
			content: '' !important;
		}
	}

	.ant-input-number,
	.ant-select,
	.ant-picker {
		width: 100%;
	}

	.ant-input,
	.ant-select-selector {
		font-size: 0.9rem;
	}

	.ant-form-item {
		margin-bottom: 0.8em !important;
	}
`;
