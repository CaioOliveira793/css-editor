import { VisualElementAnimationControls } from "framer-motion";

export interface AnimationHandles {
	start: () => Promise<any>;
	startIfNotRunning: () => Promise<void>;
	stop: () => void;
	subscribe: (controls: VisualElementAnimationControls<{}, {}>) => () => boolean;
}

export interface AnimationProps {
	size: number;
}
