import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {

  state = {
    text: "",
    length: 0
  }

  updateText = (event) => {
    const userInput = event.target.value;
    const length = userInput.length;

    this.setState({
      text: userInput,
      length: length
    });
  }

  deleteCharHandler = (charIndex) => {
    let text = [...this.state.text];
    
    text.splice(charIndex, 1);
    text = text.join('');
    this.setState({text: text});
    
  }

  render() {
    let text = this.state.text;
    let characters = [];
    
    if(text.length > 0) {
      characters = text.split('');
    }


    let chars = (
      <div>
        {characters.map((char, index) => {
            return <Char char={char} key={index} click={()=> this.deleteCharHandler(index)} />         
        })}
      </div>
    )
    

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.updateText} value={this.state.text}/>
        <p>Text length: { this.state.length }</p>
        <Validation length={this.state.length} />

        { chars }

      </div>
    );
  }
}

export default App;
