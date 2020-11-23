       import React, {Component} from 'react';
	   import UsuarioSaida from './UsuarioSaida';
	   
		   class UsuarioEntrada extends Component{
			   constructor(props) {
    super(props);
    this.state = {text: '' };
	
    this.alteraTexto = this.alteraTexto.bind(this);
    
  }

  render(){
  return (
		  <div> <label>
           Entre com Login:
          </label>
          <input 
            onChange={this.alteraTexto}
            value={this.state.text}
          />
		  <p/>
		  <UsuarioSaida user={this.state.text} frase="Seja Bem-vindo!" />
		  </div>
		  );
		  
		  }
		  alteraTexto(event) {
    this.setState({ text: event.target.value });
  }
 
		  }
		  export default UsuarioEntrada;