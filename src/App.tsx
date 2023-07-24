import './App.css';

/*
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Counter } from './components/state/Counter';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restrictions/RandomNumber';
import { Toast } from './components/templateLiterals/Toast';
import { Button } from './components/html/Button';
import { Input } from './components/html/Input';
import { CustomComponent } from './components/html/CustomComponent';
import { LoggedIn } from './components/LoggedIn'; */
import { Test } from './components/polymorphic/Test';

function App() {
	/* const personName = {
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
	]; */
	return (
		<div className='App'>
			{/* <Greet
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
			<Counter />
			<ThemeContextProvider>
				<Box/>
			</ThemeContextProvider>
			<UserContextProvider>
				<User />
			</UserContextProvider>
			<DomRef />
			<MutableRef />
			<Private
				isLoggedIn={true}
				component={Profile}
			/>
			<List
				items={['Batman', 'Superman', 'Flash']}
				onClick={item => console.log(item)}
			/>
			<RandomNumber
				value={10}
				isPositive
			/>
			<Toast position='left-bottom' />
			<Button
				variant='primary'
				onClick={() => console.log('Clicked')}>
				HTML Button
			</Button>
			<Input />
			<CustomComponent
				name='Harsh'
				messageCount={10}
				isLoggedIn
			/>
		*/}
			<Test
				as='h1'
				size='lg'>
				Heading
			</Test>
			<Test
				as='p'
				size='md'>
				Paragraph
			</Test>
			<Test
				as='label'
				htmlFor='Id'
				size='sm'
				color='secondary'>
				Label
			</Test>
		</div>
	);
}

export default App;
