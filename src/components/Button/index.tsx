import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { };

const Button: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
	return (
		<Container className={className} {...rest}>
			{children}
		</Container>
	);
}

export default Button;
