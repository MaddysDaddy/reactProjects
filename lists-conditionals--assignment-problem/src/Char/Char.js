import React from 'react';
import './Char.css'

const char = (props) => {
    console.log(props.char);
    return(
        <div className="char-box" onClick={props.click}>{ props.char }</div>
    );
}

export default char;