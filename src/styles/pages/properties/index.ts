import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: flex-start;

	max-width: 1200px;
	margin: 0px 48px;

	@media (min-width: 1296px) {
		margin: 0px auto;
	}

	> h1 {
		margin: 48px 0px 24px 0px;
		font-size: 26px;

		color: ${({ theme }) => theme.color.primary}
	}
`;

export const ItemContainer = styled.main`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-between;
	gap: 32px;

	width: 100%;
	margin-bottom: 48px;
`;

export const ItemBox = styled.a`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;

	padding: 8px;
	border-radius: 5px;
	border: ${({ theme }) => theme.color.secondary} 2px solid;

	> svg {
		width: 180px;
		color: ${({ theme }) => theme.color.secondary};
	}

	cursor: pointer;
`;
