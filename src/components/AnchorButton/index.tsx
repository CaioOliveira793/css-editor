import React, { AnchorHTMLAttributes } from 'react';

import { StyledAnchorButton } from './styles';

interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> { };

const AnchorButton: React.FC<AnchorButtonProps> = ({ children, ...rest }) => {
	return (
		<StyledAnchorButton {...rest}>
			{children}
		</StyledAnchorButton>
	);
}

export default AnchorButton;
