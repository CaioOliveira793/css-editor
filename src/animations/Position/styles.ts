import styled from 'styled-components';
import { motion } from 'framer-motion';


export interface ContainerProps {
	size: number;
};

export interface BlockProps {
	columns: number;
	rows: number;
}


export const Container = styled.div <ContainerProps>`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);

	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;

	gap: ${({ size }) => (size / 16 - 1)}px;
	padding: ${({ size }) => (size / 16 - 1)}px;

	border-radius: 5px;
	border: ${({ theme }) => theme.color.primary} 2px solid;
	overflow: hidden;
`;


export const Block = styled(motion.div) <BlockProps>`
	position: relative;
	grid-column: auto / span ${({ columns }) => columns};
	grid-row: auto / span ${({ rows }) => rows};

	border-radius: 5px;
	border: ${({ theme }) => theme.color.primary} 2px solid;
`;
