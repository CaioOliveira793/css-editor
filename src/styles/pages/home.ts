import styled from 'styled-components';
import { motion } from 'framer-motion';

import Header from '../../components/Header';

const animatedSectionTop = '(78px + 117px)';
const animatedSectionTopWithGap24 = '(78px + 137px + (2 * 24px))';
const animatedSectionTopWithGap32 = '(78px + 137px + (2 * 32px))';

export const Container = styled.div`
	display: grid;
	grid-template-rows: 78px 117px calc(100vh - ${animatedSectionTop});
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

	@media (min-height: 1000px) {
		grid-template-rows: 78px 137px calc(100vh - ${animatedSectionTopWithGap32});
		grid-row-gap: 32px;
	}

	@media (min-height: 800px) {
		grid-template-rows: 78px 137px calc(100vh - ${animatedSectionTopWithGap24});
		grid-row-gap: 24px;
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
		top: calc(78px + 24px);
	}
`;

export const TextSection = styled.section`
	position: sticky;
	top: calc(${animatedSectionTop});
	left: 0px;
	right: 0px;

	grid-area: text-section;
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: space-between;

	padding-left: 48px;
	margin-bottom: 32px;

	@media (min-height: 1000px) {
		top: calc(${animatedSectionTopWithGap32});
	}

	@media (min-height: 800px) {
		top: calc(${animatedSectionTopWithGap24});
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
	grid-area: animation-section;
	position: sticky;
	top: calc(${animatedSectionTop} + 32px);
	left: 0px;
	right: 0px;

	padding-right: 48px;
	margin: 32px 0px;

	@media (min-height: 1000px) {
		top: calc(${animatedSectionTopWithGap32});
		margin-top: 0px;
	}

	@media (min-height: 800px) {
		top: calc(${animatedSectionTopWithGap24});
		margin-top: 0px;
	}

	img {
		width: 100%;
		height: 80%;
	}
`;
