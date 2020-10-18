import React, { useRef, useContext, forwardRef, useImperativeHandle } from 'react';

import { Container, Content, Padding } from './styles';
import { AnimationHandles, AnimationProps } from '../AnimationInterfaces';
import { useAnimation, VisualElementAnimationControls, Variants } from 'framer-motion';
import { DefaultTheme, ThemeContext } from 'styled-components';

export interface BoxSizingHandles extends AnimationHandles { }

export interface BoxSizingProps extends AnimationProps { }

const BoxSizing: React.ForwardRefRenderFunction<BoxSizingHandles, BoxSizingProps> = ({ size }, ref) => {
	const theme = useContext<DefaultTheme>(ThemeContext);
	const control = useAnimation();
	const animationRunning = useRef<boolean>(false);

	useImperativeHandle(ref, () => {
		return {
			start: async () => await control.start('mountBoxSizing'),
			startIfNotRunning: async () => {
				if (animationRunning.current) return;

				animationRunning.current = true;
				await control.start('mountBoxSizing');
				animationRunning.current = false;
			},
			stop: () => control.stop(),
			subscribe: (controls: VisualElementAnimationControls<{}, {}>) => control.subscribe(controls),
		};
	});

	const boxSizingVariant: Variants = {
		mountBoxSizing: {
			transform: [
				'translate(0%, 0%) scale(1)',
				'translate(-25%, -25%) scale(0.5)',
				'translate(15%, 25%) scale(0.7)',
				'translate(0%, 0%) scale(1)'
			],
			transition: {
				duration: 1.2,
				times: [0, 0.3, 0.7, 1],
			}
		},
	};


	return (
		<Container size={size}>
			{/* <Margin> */}
			<Padding
				animate={control}
				variants={boxSizingVariant}
			>
				<Content
					animate={control}
					variants={boxSizingVariant}
				/>
			</Padding>
			{/* </Margin> */}
		</Container>
	);
}

export default forwardRef(BoxSizing);
