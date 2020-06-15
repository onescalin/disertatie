import React, { Component } from "react";
import Cabluri from "./cabluri";

class Comenzi extends Component {
  render() {
    const lista = this.props.cabluri.map(item => (
      <Cabluri
        key={item.id}
        id={item.id}
        denumirea={item.denumirea}
        culoarea={item.culoarea}
        cantitatea={item.cantitatea}
        clientul={item.clientul}
        ambalare={item.ambalare}
        stergeCabluri={this.props.stergeCabluri}
      />
    ));
    return (
      <div>
        <h2 className="text-center">Comenzile clientilor</h2>
        <hr />
        {lista}
      </div>
    );
  }
}

export default Comenzi;
