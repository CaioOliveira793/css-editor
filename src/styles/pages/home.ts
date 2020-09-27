import styled from 'styled-components';
import { motion } from 'framer-motion';

import Header from '../../components/Header';

export const Container = styled.div`
	display: grid;
	grid-template-rows: 78px 117px calc(100vh - (78px + 117px));
	grid-template-columns: 1fr 2fr;
	grid-template-areas:
		'header header'
		'presentation presentation'
		'text-section animation-section'
	;
	justify-content: center;
	position: relative;

	max-width: 1800px;
	height: 700vh;
	margin: 0px auto 0px auto;

	@media (min-height: 800px) {
		grid-template-rows: 78px 137px calc(100vh - (78px + 137px));
	}
`;

export const StyledHeader = styled(Header)`
	grid-area: header;
	position: sticky;
	top: 0px;
	left: 0px;
	right: 0px;
`;

export const PresentationContainer = styled.div`
	grid-area: presentation;
	position: sticky;
	top: 78px;
	left: 0px;
	right: 0px;
	padding: 0px 48px;

	> h1 {
		font-size: 32px;
		letter-spacing: 2px;
		margin-bottom: 32px;
	}

	> p {
		margin-bottom: 8px;
	}

	@media (min-height: 800px) {
		margin-top: 20px;
		top: 98px;
	}
`;

export const TextSection = styled.section`
	position: sticky;
	top: calc(78px + 117px + 24px);
	left: 0px;
	right: 0px;

	grid-area: text-section;
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: space-between;

	padding-left: 48px;
	margin: 24px 0px 72px 0px;

	@media (min-height: 1000px) {
		margin: 32px 0px 72px 0px;
		top: calc(78px + 117px + 32px + 20px);
	}

	@media (min-height: 800px) {
		top: calc(78px + 117px + 24px + 20px);
	}

	@media (max-height: 570px) {
		justify-content: center;
	}
`;

export const AnimatedText = styled(motion.div)`
	@media (max-height: 570px) {
		position: absolute;
	}

	> svg {
		position: relative;
		top: 12px;
	}

	> h2 {
		font-size: 20px;
		text-transform: uppercase;
		margin-bottom: 26px;

		@media (max-height: 400px) {
			margin-bottom: 16px;
		}
	}
`;

export const AnimationSection = styled.section`
	position: sticky;
	top: calc(78px + 117px + 24px);
	left: 0px;
	right: 0px;

	grid-area: animation-section;
	padding-right: 48px;
	margin-top: 24px;

	margin: 24px 0px 72px 0px;

	@media (min-height: 1000px) {
		margin: 32px 0px 72px 0px;
		top: calc(78px + 117px + 32px + 20px);
	}

	@media (min-height: 800px) {
		top: calc(78px + 117px + 24px + 20px);
	}

	img {
		width: 100%;
		height: 80%;
	}
`;
