import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components';
import { useAnimation, VisualElementAnimationControls } from 'framer-motion';

import { Container } from './styles';

export interface GradientProps {
	size: number;
}

export interface GradientHandles {
	start: () => Promise<any>;
	startIfNotRunning: () => Promise<void>;
	stop: () => void;
	subscribe: (controls: VisualElementAnimationControls<{}, {}>) => () => boolean;
}

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

	const gradientVariant = {
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
		></Container>
	);
}

export default forwardRef(Gradient);
