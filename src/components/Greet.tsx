type GreetProps = {
	name: string;
	messageCount?: number /* ? for optional */;
	isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
	const { messageCount = 0 } = props;
	return (
		<div>
			<h2>
				{props.isLoggedIn
					? `Welcome ${props.name}! You have ${messageCount} unread messages.`
					: `Welcome Guest`}
			</h2>
		</div>
	);
};
