import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";


class App extends Component {
    state = {
        persons: [
            {name: 'Alex', age: '30'},
            {name: 'Liza', age: '25'},
            {name: 'Victory', age: '28'}
        ]
    };

    switchNameHandler = () => {
        // console.log('Was clicked!');
        //   this.state.persons[0].name = 'Alexei';
        this.setState({
            persons: [
                {name: 'Alexei', age: '30'},
                {name: 'Liza', age: '28'},
                {name: 'Victory', age: '29'}
            ]
        })
    };


    render() {
        return (
            <div className="App">
                <h1>HI, I'm react App</h1>
                <button onClick={this.switchNameHandler}>switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
