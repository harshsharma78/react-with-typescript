import React from 'react';

type ButtonProps = {
	variant: 'primary' | 'secondary';
	children: string;
	// } & React.ComponentProps<'button'>;
} & Omit<
	React.ComponentProps<'button'>,
	'children'
>; /* Restricting children prop to accept only strings */

export const Button = ({ variant, children, ...rest }: ButtonProps) => {
	return (
		<button
			className={`class-with-${variant}`}
			{...rest}>
			{children}
		</button>
	);
};
