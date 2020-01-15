import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";


const App = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Alex', age: '30'},
            {name: 'Liza', age: '25'},
            {name: 'Victory', age: '28'}
        ],
        showPersons: false
    });

    const [otherState, setOtherState] = useState('some other state');
    console.log(personsState);

    const switchNameHandler = (userName) => {
        setPersonsState({
            persons: [
                {name: userName, age: '30'},
                {name: 'Liza', age: '28'},
                {name: 'Victory', age: '29'}
            ],
            otherState: personsState.otherState,
            showPersons: !personsState.showPersons
        })
    };


    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                {name: 'Alex', age: '30'},
                {name: event.target.value, age: '28'},
                {name: 'Victory', age: '29'}
            ]
        })
    };

    const togglePersonsHandler = () => {
        const isShow = personsState.showPersons;

    };

    return (
        <div className="App">
            <h1>HI, I'm react App</h1>
            <button onClick={() => switchNameHandler('Alex?!')}>switch name</button>

            {personsState.showPersons === true ?
                <div>
                    <Person
                        name={personsState.persons[0].name}
                        age={personsState.persons[0].age}
                        click={switchNameHandler.bind(this, 'Alexeeeeei')}/>
                    <Person
                        name={personsState.persons[1].name}
                        age={personsState.persons[1].age}
                        changed={nameChangedHandler}/>
                    <Person
                        name={personsState.persons[2].name}
                        age={personsState.persons[2].age}/>
                </div> : null
            }

        </div>
    );
};

export default App;



