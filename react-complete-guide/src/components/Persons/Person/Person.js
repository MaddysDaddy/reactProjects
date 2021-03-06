import React from "react";
// import Radium from 'radium';
import classes from "./Person.css";
import WithClass from "../../../hoc/WithClass/WithClass";

const person = props => {
  return (
    <WithClass classes={classes.Person}>
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </WithClass>
  );
};

// export default Radium(person);
export default person;
