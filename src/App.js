import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import txt from "./encrypted.txt";

class App extends Component {
  state = {
    text: ""
  };
  componentDidMount() {
    axios
      .get(txt)
      .then(data =>
        this.setState({
          text: data.data
            .split(" ")
            .join("")
            .split(" ")[0]
            .split("")
            .map(e => {
              switch (e.toLowerCase()) {
                case "a":
                  return "z";
                  break;
                case "b":
                  return "y";
                  break;
                case "c":
                  return "x";
                  break;
                case "d":
                  return "w";
                  break;
                case "e":
                  return "f";
                  break;
                case "f":
                  return "v";
                  break;
                case "g":
                  return "u";
                  break;
                case "h":
                  return "b";
                  break;
                case "i":
                  return "c";
                  break;
                case "j":
                  return "t";
                  break;
                case "k":
                  return "s";
                  break;
                case "l":
                  return "r";
                  break;
                case "m":
                  return "d";
                  break;
                case "n":
                  return "e";
                  break;
                case "o":
                  return "q";
                  break;
                case "p":
                  return "p";
                  break;
                case "q":
                  return "o";
                  break;
                case "r":
                  return "n";
                  break;
                case "s":
                  return "m";
                  break;
                case "t":
                  return "l";
                  break;
                case "u":
                  return "k";
                  break;
                case "v":
                  return "j";
                  break;
                case "w":
                  return "i";
                  break;
                case "x":
                  return "h";
                  break;
                case "y":
                  return "g";
                  break;
                case "z":
                  return "a";
                  break;
                default:
                  return e;
              }
            })
            .join("")
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <p>{!this.state.text.length ? "ciphering..." : this.state.text}</p>
      </div>
    );
  }
}

export default App;

//starts counting at J
//reverse the index in the alphabet with
