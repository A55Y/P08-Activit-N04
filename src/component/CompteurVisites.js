import { Component } from "react";

export default class CompteurVisites extends Component {
  constructor() {
    super();
    this.state = { compteur: 0 };
  }

  ajouter() {
    this.setState({ compteur: this.state.compteur + 1 });
  }

  moins() {
    this.setState({ compteur: this.state.compteur - 1})
  }

  reinitialiser() {
    this.setState({ compteur: 0 });
  }

  render() {
    return (
      <div>
        <h2>Nombre de stagiaires : {this.state.compteur}</h2>
        <button onClick={() => this.ajouter()}>+ Add</button>
        <button onClick={() => this.moins()}>- Moins</button>
        <button onClick={() => this.reinitialiser()}>Réinitialiser</button>
      </div>
    );
  }
}
