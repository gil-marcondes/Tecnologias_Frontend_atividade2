import React, {Component} from 'react';
import UsuarioEntrada from './UsuarioEntrada';
import './App.css';

		   class UsuarioSaida extends Component{
		   render(){
  return (
		  <div ClassName="App"> 
		<table>
		<tr>
		  <h3> Login: {this.props.user}</h3>
		  <h3> {this.props.frase}</h3>
		</tr>
		</table>
		  </div>
		  );
		  
		  }
		 
 
		  }
		  export default UsuarioSaida;