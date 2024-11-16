import styled from 'styled-components';

export const StyledAlchemyLab = styled.div<{ height?: number }>`
	width: 100%;
	height: ${({ height }) => (typeof height === 'number' ? `${height}px` : '650px')};
	border: 1px solid var(--grey-300);
	border-radius: 6px;
	overflow: hidden;

	.form-alcmst__alchemy-lab-header {
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

	.form-alcmst__alchemy-lab-body {
		height: calc(100% - 50px);
		display: flex;
	}
`;
