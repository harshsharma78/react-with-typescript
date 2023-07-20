type StatusProps = {
	status: 'Loading' | 'Success' | 'Error';
};
export const Status = (props: StatusProps) => {
	let message;

	if (props.status === 'Loading') message = 'Loading...';
	else if (props.status === 'Success') message = 'Data Fetched Succesfully!';
	else if (props.status === 'Error') message = 'Error Fetching Data!';

	return <div>{message}</div>;
};
