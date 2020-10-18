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

export const Box = styled(motion.div)`
	width: 60%;
	height: 60%;

	border-radius: 5px;
	box-shadow: 0px 0px 20px 10px ${({ theme }) => theme.color.primary};
`;
