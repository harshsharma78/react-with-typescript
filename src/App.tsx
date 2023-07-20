import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/LoggedIn';

function App() {
	const personName = {
		first: 'Bruce',
		last: 'Wayne',
	};
	const nameList = [
		{
			first: 'Bruce',
			last: 'Wayne',
		},
		{
			first: 'Clark',
			last: 'Kent',
		},
		{
			first: 'Barry',
			last: 'Allen',
		},
	];

	return (
		<div className='App'>
			<Greet
				name='Harsh'
				// messageCount={20}
				isLoggedIn={true}
			/>
			<Person name={personName} />
			<PersonList names={nameList} />

			<Status status='Loading' />
			<Heading>Children Prop Example</Heading>
			<Oscar>
				<Heading>Oscar goes to Robert Downey Jr.!</Heading>
			</Oscar>

			<Button
				handleClick={(e, id) => {
					console.log('Button Clicked', e, id);
				}}
			/>
			<Input
				value=''
				handleChange={e => console.log(e)}
			/>
			<Container styles={{ border: '1px solid black', padding: '1rem' }} />

			<LoggedIn />
		</div>
	);
}

export default App;
