import React, { useImperativeHandle, forwardRef, Ref, useRef } from 'react';
import { useAnimation, VisualElementAnimationControls } from 'framer-motion';

import { Container, Block, BlockProps } from './styles';

export interface PositionHandles {
	start: () => Promise<any>;
	startIfNotRunning: () => Promise<void>;
	stop: () => void;
	subscribe: (controls: VisualElementAnimationControls<{}, {}>) => () => boolean;
}

export interface PositionProps {
	size: number;
	ref: Ref<PositionHandles>
}


const Position: React.ForwardRefRenderFunction<PositionHandles, PositionProps> = ({ size }, ref) => {
	const control = useAnimation();
	const animationRunning = useRef<boolean>(false);

	useImperativeHandle(ref, () => {
		control.mount();
		return {
			start: async () => await control.start('mountPosition'),
			startIfNotRunning: async () => {
				if (animationRunning.current) return;

				animationRunning.current = true;
				await control.start('mountPosition');
				animationRunning.current = false;
			},
			stop: () => control.stop(),
			subscribe: (controls: VisualElementAnimationControls<{}, {}>) => control.subscribe(controls),
		};
	});

	const blockVariant = {
		mountPosition: (i: number) => ({
			top: ['0px', '0px', `${size}px`, '0px'],
			scale: [1, 0.5, 1, 1],
			opacity: [1, 0, 1, 1],
			transition: {
				duration: 1.2,
				times: [0, 0.4, 0.4, 1],
				delay: i * 0.3,
			}
		}),
	};

	const blocks: BlockProps[] = [
		{ columns: 1, rows: 2 },
		{ columns: 2, rows: 1 },
		{ columns: 1, rows: 2 },
		{ columns: 1, rows: 1 },
		{ columns: 1, rows: 1 },
		{ columns: 1, rows: 1 }
	];

	return (
		<Container size={size}>
			{blocks.map((props, index) => (
				<Block
					{...props}
					animate={control}
					variants={blockVariant}
					custom={index}
				/>
			))}
		</Container>
	);
}

export default forwardRef(Position);
