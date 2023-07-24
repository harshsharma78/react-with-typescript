import React from 'react';

type ListProps<T> = {
	items: T[];
	onClick: (value: T) => void;
};

// export const List = <T extends string | number>
// export const List = <T extends { id: number }>
export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
	return (
		<>
			<h2>List</h2>
			{items.map((item, index) => {
				return (
					<>
						<div
							key={index}
							onClick={() => onClick(item)}></div>

						{item}
					</>
				);
			})}
		</>
	);
};
