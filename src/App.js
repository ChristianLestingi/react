// Write a class component called App that renders the Hello component within a div tag.

import React from "react"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome  name= {<strong>Christian</strong>} age={30}/>
      </div>
    );
  }
}
