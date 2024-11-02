import styled from 'styled-components';

export const StyledCompileJsx = styled.div`
	.ant-input-number,
	.ant-select,
	.ant-picker {
		width: 100%;
	}

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

	.form-alcmst__element-wrapper > label {
		display: block;
		width: 100%;
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
