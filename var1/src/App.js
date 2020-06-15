import React, { Component } from "react";
import Comenzi from "./comenzi";
import Formular from "./formular";
import Sortiment from "./sortiment";
import Despre from "./despre";
import Contact from "./contact";
import Acasa from "./acasa";
import { Route } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import "./App.css";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("examen")) {
      this.setState({ cabluri: JSON.parse(localStorage.getItem("examen")) });
    } else {
      this.setState({ cabluri: [] });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      cabluri: [],
    };

    this.adaugCabluri = this.adaugCabluri.bind(this);
    this.stergeCabluri = this.stergeCabluri.bind(this);
  }

  adaugCabluri(act) {
    const { cabluri } = this.state;
    var sirAct = cabluri;
    sirAct.push({
      id: sirAct.length ? sirAct[sirAct.length - 1].id + 1 : 1,
      denumirea: act.denumirea,
      culoarea: act.culoarea,
      cantitatea: act.cantitatea,
      clientul: act.clientul,
      ambalare: act.ambalare,
    });
    this.setState({ cabluri: sirAct });
    localStorage.setItem("examen", JSON.stringify(sirAct));
  }

  stergeCabluri(ev) {
    const idSup = parseInt(ev.target.id); //  id e convertit in intreg
    const { cabluri } = this.state;
    const sirAct = cabluri.filter((item) => {
      return item.id !== idSup;
    });
    this.setState({ cabluri: sirAct });
    localStorage.setItem("examen", JSON.stringify(sirAct));
  }

  render() {
    return (
      <div className="header-color">
        <MDBNavbar color="header-color" dark expand="md">
          <MDBNavbarBrand>
            <strong className="black-text">
              <img
                src="http://electricgroup.ml/poze/sigla_mica.jpg"
                alt="avatar"
              />
            </strong>
          </MDBNavbarBrand>
          <MDBNavbarNav justify>
            <MDBNavItem>
              <MDBNavLink to="/acasa">Acasa</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/sortiment">Sortiment</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/">Comenzi clienti</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/adaug">Adauga comanda</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/despre">Despre</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">Contact</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
        <Route
          exact
          path="/"
          render={(props) => (
            <Comenzi
              {...props}
              cabluri={this.state.cabluri}
              stergeCabluri={this.stergeCabluri}
            />
          )}
        />
        <Route
          path="/adaug"
          render={(props) => (
            <Formular {...props} adaugCabluri={this.adaugCabluri} />
          )}
        />
        <Route path="/sortiment" component={Sortiment} />
        <Route path="/despre" component={Despre} />
        <Route path="/contact" component={Contact} />
        <Route path="/acasa" component={Acasa} />
      </div>
    );
  }
}

export default App;
