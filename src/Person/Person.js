import React from 'react';

import './Person.css';

const person = (props) => {

    return (
        <div className='Person'>
            <p onClick={props.click}>I'm a {props.name} and I'm a {props.age}.</p>
            <p>{props.children}            </p>
            <input type="test" onChange={props.changed} value={props.name}/>
        </div>
    )
    }
;

export default person;