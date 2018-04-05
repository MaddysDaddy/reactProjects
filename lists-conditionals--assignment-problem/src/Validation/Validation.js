import React from 'react';

const validation = (props) => {
    let message = null;
    props.length >= 5 ? message="Text long enough" : message="Text too short";

    return (
        <p>{message}</p>
    )
}

export default validation;