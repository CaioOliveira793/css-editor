import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface ContainerProps {
	size: number;
};

export const Container = styled(motion.div) <ContainerProps>`
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;

	background: linear-gradient(90deg,
		${({ theme }) => theme.color.primary} 10%,
		${({ theme }) => theme.color.secondary} 90%,
		${({ theme }) => theme.color.primary} 170%);

	border-radius: 5px;
	border: ${({ theme }) => theme.color.primary} 2px solid;
	overflow: hidden;
`;
