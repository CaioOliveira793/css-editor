import React, { useRef, useContext, forwardRef, useImperativeHandle } from 'react';

import { Container, Box } from './styles';
import { AnimationHandles, AnimationProps } from '../AnimationInterfaces';
import { useAnimation, VisualElementAnimationControls, Variants } from 'framer-motion';
import { DefaultTheme, ThemeContext } from 'styled-components';

export interface BoxShadowHandles extends AnimationHandles { }

export interface BoxShadowProps extends AnimationProps { }

const BoxShadow: React.ForwardRefRenderFunction<BoxShadowHandles, BoxShadowProps> = ({ size }, ref) => {
	const theme = useContext<DefaultTheme>(ThemeContext);
	const control = useAnimation();
	const animationRunning = useRef<boolean>(false);

	useImperativeHandle(ref, () => {
		return {
			start: async () => await control.start('mountBoxShadow'),
			startIfNotRunning: async () => {
				if (animationRunning.current) return;

				animationRunning.current = true;
				await control.start('mountBoxShadow');
				animationRunning.current = false;
			},
			stop: () => control.stop(),
			subscribe: (controls: VisualElementAnimationControls<{}, {}>) => control.subscribe(controls),
		};
	});

	const boxShadowVariant: Variants = {
		mountBoxShadow: {
			scale: [1, 0.7, 1.2, 1],
			boxShadow: [
				`0px 0px 20px 10px ${theme.color.primary}`,
				`0px 0px 50px 15px ${theme.color.primary}`,
				`0px 0px 10px 5px ${theme.color.primary}`,
				`0px 0px 20px 10px ${theme.color.primary}`
			],
			transition: {
				duration: 1.2,
				times: [0, 0.3, 0.7, 1],
			}
		},
	};


	return (
		<Container size={size}>
			<Box
				animate={control}
				variants={boxShadowVariant}
			/>
		</Container>
	);
}

export default forwardRef(BoxShadow);
