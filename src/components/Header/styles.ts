import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	padding: 24px 48px;
`;

export const PageTitle = styled.strong`
	font-size: 22px;
	font-weight: 500;
	letter-spacing: 2px;

	color: ${({ theme }) => theme.color.primaryText};
`;

export const Navigation = styled.nav`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	gap: 0px 18px;
`;

export const Anchor = styled.a`
	font-size: 12px;
	letter-spacing: 1px;
	text-transform: uppercase;
	text-decoration: none;
	cursor: pointer;
`;
