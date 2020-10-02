import React from 'react';
import { FaMinus } from 'react-icons/fa';

import {
	Container, StyledHeader, PresentationContainer, TextSection, AnimatedText,
	AnimationSection
} from '../styles/pages/home';


const Home: React.FC = () => {
	return (
		<Container>
			<StyledHeader />
			<PresentationContainer>
				<h1>CSS in a intuitive way</h1>
				<p>Edit your CSS properties to make peaces of layout.</p>
				<p>Think visualy, let us generate the code.</p>
			</PresentationContainer>

			<TextSection>
				<AnimatedText>
					<FaMinus size={32} />
					<h2>chose</h2>
					<p>Select the property or topic to create.</p>
				</AnimatedText>

				<AnimatedText>
					<FaMinus size={32} />
					<h2>edit</h2>
					<p>Explore your ideas visualy using the UI controls.</p>
				</AnimatedText>

				<AnimatedText>
					<FaMinus size={32} />
					<h2>generate</h2>
					<p>Use the code generated as you want.</p>
				</AnimatedText>
			</TextSection>

			<AnimationSection>
				<img src="" alt="temp" />
			</AnimationSection>
		</Container>
	);
}

export default Home;
