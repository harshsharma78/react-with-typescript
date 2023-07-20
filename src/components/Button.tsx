import React from 'react';

type ButtonProps = {
	// handleClick: () => void;
	handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
export const Button = (props: ButtonProps) => {
	return (
		<div>
			<button onClick={e => props.handleClick(e, 1)}>Click</button>
		</div>
	);
};
