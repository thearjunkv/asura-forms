import styled, { css } from 'styled-components';

export const StyledCompileJsx = styled.div<{ $customstyles?: string }>`
	overflow: auto;

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

	.asura-forms__element-title {
	}

	.asura-forms__element-paragraph {
	}

	.asura-forms__element-separator {
	}

	${props =>
		props.$customstyles &&
		css`
			${props.$customstyles}
		`}
`;

export const StyledCompileSectionJsx = styled.div<{ $customstyles?: string }>`
	overflow: auto;
	width: auto;
	${props =>
		props.$customstyles &&
		css`
			${props.$customstyles}
		`}
`;
