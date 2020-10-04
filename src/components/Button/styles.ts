import styled from 'styled-components';

export const Container = styled.button`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;

	padding: 10px 22px;
	border-radius: 2px;

	background: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.background};

	cursor: pointer;
`;
