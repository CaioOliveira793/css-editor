import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface ContainerProps {
	size: number;
};

export const Container = styled.div <ContainerProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;

	border-radius: 5px;
	border: ${({ theme }) => theme.color.primary} 2px solid;
	overflow: hidden;
`;

export const Padding = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	height: 80%;

	border-radius: 5px;
	border: ${({ theme }) => theme.color.secondary} 3px solid;
`;

export const Content = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60%;
	height: 60%;

	border-radius: 5px;
	border: ${({ theme }) => theme.color.primary} 3px solid;
`;
