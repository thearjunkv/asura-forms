import styled from 'styled-components';

export const StyledFormLab = styled.div`
	width: 100%;
	background-color: var(--white);
	border: 1px solid var(--grey-300);
	border-radius: 12px;
	overflow: hidden;

	.asura-forms__form-lab-header {
		height: 50px;
		padding: 0.5em 0.5em 0.5em 1em;
		border-bottom: 1px solid var(--grey-100);
		display: flex;
		justify-content: space-between;
		align-items: center;

		h1 {
			font-size: 0.9rem;
			font-weight: normal;
			color: var(--grey-700);
		}

		h1 span {
			font-size: 0.94rem;
			font-weight: bold;
			color: var(--grey-800);
		}

		div {
			display: flex;
		}

		div button {
			margin-left: 0.5em;
		}
	}

	.asura-forms__form-lab-body {
		height: calc(100% - 50px);
		display: flex;
	}
`;
