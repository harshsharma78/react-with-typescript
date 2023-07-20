import React, { useState } from 'react';

type AuthUser = {
	name: string;
	email: string;
};

export const User = () => {
	/* const [user, setUser] = useState<AuthUser | null>(null); */

	/* Type Assertion and now can use only dot instead of ?. in user?.name */
	const [user, setUser] = useState<AuthUser>({} as AuthUser);

	const handleLogin = () => {
		setUser({
			name: 'Harsh',
			email: 'harsh@email.com',
		});
	};

	/* const handleLogout = () => {
		 setUser(null);
	}; */

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			{/* <button onClick={handleLogout}>Logout</button> */}
			<div>User name is {user?.name}</div>
			<div>User email is {user?.email}</div>
		</div>
	);
};
