import React, { HTMLAttributes } from 'react';
import Link from 'next/link';

import { Container, Navigation, PageTitle, Anchor } from './styles';

interface HeaderProps extends HTMLAttributes<{}> { };

const Header: React.FC<HeaderProps> = ({ className }) => {
	return (
		<Container className={className}>
			<PageTitle>CSS Editor</PageTitle>
			<Navigation>
				<Link href="/properties">
					<Anchor>Properties</Anchor>
				</Link>
			</Navigation>
		</Container>
	);
}

export default Header;
