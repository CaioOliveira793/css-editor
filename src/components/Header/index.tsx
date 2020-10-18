import React, { HTMLAttributes } from 'react';
import Link, { LinkProps } from 'next/link';

import { Container, Navigation, PageTitle, Anchor } from './styles';

interface HeaderLink extends LinkProps {
	label: string,
};

interface HeaderProps extends HTMLAttributes<{}> {
	links?: HeaderLink[];
};

const Header: React.FC<HeaderProps> = ({ className, links }) => {
	return (
		<Container className={className}>
			<PageTitle>CSS Editor</PageTitle>
			<Navigation>
				{links?.map(({ label, ...linkProps }, index) => (
					<Link key={index} {...linkProps}>
						<Anchor>{label}</Anchor>
					</Link>
				))}
			</Navigation>
		</Container>
	);
}

export default Header;
