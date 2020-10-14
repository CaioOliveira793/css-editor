import React, { useCallback, useRef } from 'react';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

import Header from '../../components/Header';

import PostionAnimation, { PositionHandles } from '../../animations/Position';
import GradientAnimation, { GradientHandles } from '../../animations/Gradient';

import { Container, ItemContainer, ItemBox } from '../../styles/pages/properties/index';


const Properties: React.FC = () => {
	const positionAnimationRef = useRef<PositionHandles>(null);
	const gradientAnimationRef = useRef<GradientHandles>(null);

	const startPositionAnimation = useCallback(() => {
		positionAnimationRef.current.startIfNotRunning();
	}, [positionAnimationRef]);

	const startGradientAnimation = useCallback(() => {
		gradientAnimationRef.current.startIfNotRunning();
	}, [gradientAnimationRef]);

	return (
		<Container>
			<Header links={[]} />
			<h1>Chose a item</h1>
			<ItemContainer>
				<Link href="/properties/position">
					<ItemBox onMouseEnter={startPositionAnimation}>
						<PostionAnimation size={140} ref={positionAnimationRef} />
						<span>position</span>
					</ItemBox>
				</Link>

				<Link href="/properties/gradient">
					<ItemBox onMouseEnter={startGradientAnimation}>
						<GradientAnimation size={140} ref={gradientAnimationRef} />
						<span>gradient</span>
					</ItemBox>
				</Link>

				<Link href="/properties/box-shadow">
					<ItemBox>
						<FaEdit size={140} />
						<span>box-shadow</span>
					</ItemBox>
				</Link>

				<Link href="/properties/box-sizing">
					<ItemBox>
						<FaEdit size={140} />
						<span>box-sizing</span>
					</ItemBox>
				</Link>

				<Link href="/properties/font">
					<ItemBox>
						<FaEdit size={140} />
						<span>font</span>
					</ItemBox>
				</Link>

				<Link href="/properties/text">
					<ItemBox>
						<FaEdit size={140} />
						<span>text</span>
					</ItemBox>
				</Link>

				<Link href="/properties/transform">
					<ItemBox>
						<FaEdit size={140} />
						<span>transform</span>
					</ItemBox>
				</Link>

				<Link href="/properties/cubic-bezier">
					<ItemBox>
						<FaEdit size={140} />
						<span>cubic-bezier</span>
					</ItemBox>
				</Link>

				<Link href="/properties/entities">
					<ItemBox>
						<FaEdit size={140} />
						<span>entities</span>
					</ItemBox>
				</Link>
			</ItemContainer>
		</Container>
	);
}

export default Properties;
