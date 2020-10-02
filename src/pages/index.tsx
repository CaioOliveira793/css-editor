import React, { useCallback } from 'react';
import Link from 'next/link';
import { useTransform, useViewportScroll } from 'framer-motion';
import { FaMinus } from 'react-icons/fa';

import {
	Container, StyledHeader, PresentationContainer, TextSection, AnimatedText,
	AnimationSection
} from '../styles/pages/index';

import AnchorButton from '../components/AnchorButton';


const Home: React.FC = () => {
	const { scrollYProgress } = useViewportScroll();
	const animatedTextChose = {
		opacity: useTransform(scrollYProgress, [0.05, 0.2, 0.35, 0.4], [0, 1, 1, 0]),
		translateX: useTransform(scrollYProgress, [0.1, 0.15], [-48, 0]),
	};

	const animatedTextEdit = {
		opacity: useTransform(scrollYProgress, [0.4, 0.55, 0.7, 0.75], [0, 1, 1, 0]),
		translateX: useTransform(scrollYProgress, [0.45, 0.5], [-48, 0]),
	};

	const animatedTextGenerate = {
		opacity: useTransform(scrollYProgress, [0.75, 0.9], [0, 1]),
		translateX: useTransform(scrollYProgress, [0.8, 0.85], [-48, 0]),
	};


	return (
		<Container>
			<StyledHeader />
			<PresentationContainer>
				<h1>CSS in a intuitive way</h1>
				<p>Edit your CSS properties to make peaces of layout.</p>
				<p>Think visualy and use the generated code.</p>
			</PresentationContainer>

			<TextSection>
				<AnimatedText
					style={{
						...animatedTextChose
					}}
				>
					<FaMinus size={32} />
					<h2>chose</h2>
					<p>Select the property or topic to create.</p>
				</AnimatedText>

				<AnimatedText
					style={{
						...animatedTextEdit
					}}
				>
					<FaMinus size={32} />
					<h2>edit</h2>
					<p>Explore your ideas visualy using the UI controls.</p>
				</AnimatedText>

				<AnimatedText
					style={{
						...animatedTextGenerate
					}}
				>
					<FaMinus size={32} />
					<h2>generate</h2>
					<p>Use the code generated as you want.</p>
					<Link href="/properties">
						<AnchorButton>Start now</AnchorButton>
					</Link>
				</AnimatedText>
			</TextSection>

			<AnimationSection>
				<img src="" alt="temp" />
			</AnimationSection>
		</Container>
	);
}

export default Home;
