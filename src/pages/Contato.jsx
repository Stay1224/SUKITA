import React, { Component } from "react";
import styles from "./Contato.module.css"; // Importe seu módulo CSS

class Contato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    // Simulação de autenticação bem-sucedida
    if (this.state.username === "usuario" && this.state.password === "senha") {
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    return (
      <div className={styles.container}>
        {this.state.isLoggedIn ? (
          <div>
            <h1>Bem-vindo, {this.state.username}!</h1>
            <button onClick={() => this.setState({ isLoggedIn: false })}>Sair</button>
          </div>
        ) : (
          <div>
            <h1>Faça o Login</h1>
            <input
              type="text"
              name="username"
              placeholder="Usuário"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleLogin}>Entrar</button>
          </div>
        )}
      </div>
    );
  }
}

export default Contato;
