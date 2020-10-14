import React, { useCallback, useRef } from 'react';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

import Header from '../../components/Header';

import PostionAnimation, { PositionHandles } from '../../animations/Position';

import { Container, ItemContainer, ItemBox } from '../../styles/pages/properties/index';


const Properties: React.FC = () => {
	const positionAnimationRef = useRef<PositionHandles>(null);

	const startAnimation = useCallback(() => {
		positionAnimationRef.current.startIfNotRunning();
	}, [positionAnimationRef]);

	return (
		<Container>
			<Header links={[]} />
			<h1>Chose a item</h1>
			<ItemContainer>
				<Link href="/properties/position">
					<ItemBox
						onMouseEnter={startAnimation}
					>
						<PostionAnimation size={140} ref={positionAnimationRef} />
						<span>position</span>
					</ItemBox>
				</Link>

				<Link href="/properties/gradient">
					<ItemBox>
						<FaEdit size={140} />
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
