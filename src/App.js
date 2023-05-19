import { Component } from "react";
import './App.css';
import About from './components/About/About.jsx';
import Home from './components/Home.jsx';

export default class App extends Component {
  render(){

    return (
    <div>
   
   
     <Home/>
     <About/>
     
    </div>
    )
  }
}


