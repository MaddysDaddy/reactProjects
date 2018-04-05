import React from 'react';

const userInput = (props) => {

    const inputStyle = {
        border: '2px solid red'
    }

    return (
        <input type="text" name="name" id="name" style={ inputStyle } onChange={ props.changed } value={ props.currentName }/>
    )
}

export default userInput;