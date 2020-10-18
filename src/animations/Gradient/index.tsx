import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components';
import { useAnimation, Variants, VisualElementAnimationControls } from 'framer-motion';

import { Container } from './styles';
import { AnimationHandles, AnimationProps } from '../AnimationInterfaces';

export interface GradientProps extends AnimationProps { }

export interface GradientHandles extends AnimationHandles { }

const Gradient: React.ForwardRefRenderFunction<GradientHandles, GradientProps> = ({ size }, ref) => {
	const theme = useContext<DefaultTheme>(ThemeContext);
	const control = useAnimation();
	const animationRunning = useRef<boolean>(false);

	useImperativeHandle(ref, () => {
		return {
			start: async () => await control.start('mountGradient'),
			startIfNotRunning: async () => {
				if (animationRunning.current) return;

				animationRunning.current = true;
				await control.start('mountGradient');
				animationRunning.current = false;
			},
			stop: () => control.stop(),
			subscribe: (controls: VisualElementAnimationControls<{}, {}>) => control.subscribe(controls),
		};
	});

	const gradientVariant: Variants = {
		mountGradient: {
			background: [
				`linear-gradient(90deg,
				${theme.color.primary} 10%,
				${theme.color.secondary} 90%,
				${theme.color.primary} 170%)`,

				`linear-gradient(90deg,
				${theme.color.primary} -70%,
				${theme.color.secondary} 10%,
				${theme.color.primary} 90%)`,

				`linear-gradient(90deg,
				${theme.color.primary} 10%,
				${theme.color.secondary} 90%,
				${theme.color.primary} 170%)`
			],
			transition: {
				duration: 1.2,
				times: [0, 0.4, 1],
			}
		},
	};

	return (
		<Container
			size={size}
			animate={control}
			variants={gradientVariant}
		/>
	);
}

export default forwardRef(Gradient);
