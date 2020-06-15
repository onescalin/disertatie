import React, { Component } from "react";
import { MDBBtn, MDBInput } from "mdbreact";
import { Grid, Cell } from "react-mdl";

class Formular extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      denumirea: "",
      culoarea: "",
      cantitatea: "",
      clientul: "",
      ambalare: "",
      id: 0
    };

    //  Initializez obiectul "state"
    this.state = this.initialState;

    //  Functii de tratare a evenimentelor "change" si "submit"
    this.handleChange = this.handleChange.bind(this);
    this.adaugaCabluri = this.adaugaCabluri.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;

    this.setState({
      [name]: value
    });
  }

  adaugaCabluri() {
    this.props.adaugCabluri(this.state);
    this.setState(this.initialState); // Golesc formularul
  }

  render() {
    return (
      <div className="cabluri-body">
        <Grid className="cabluri-grid">
          <Cell col={12}>
            <h2 className="text-center">Introduceți comanda</h2>
            <form className="mx-3 grey-text">
              <MDBInput
                name="denumirea"
                label="Denumirea cablului"
                icon="pallet"
                hint="FY 1.5"
                group
                type="text"
                value={this.state.denumirea}
                onChange={this.handleChange}
              />
              <MDBInput
                name="culoarea"
                label="Culoarea"
                icon="edit"
                hint="Galben"
                group
                type="text"
                value={this.state.culoarea}
                onChange={this.handleChange}
              />
              <MDBInput
                name="cantitatea"
                label="Cantitatea (ml)"
                icon="box"
                group
                type="text"
                value={this.state.cantitatea}
                onChange={this.handleChange}
              />
              <MDBInput
                name="clientul"
                label="Denumirea Clientului"
                icon="sticky-note"
                group
                type="text"
                value={this.state.clientul}
                onChange={this.handleChange}
              />
              <MDBInput
                name="ambalare"
                label="Ambalare (tamburi sau colaci)"
                icon="dolly"
                group
                type="text"
                value={this.state.ambalare}
                onChange={this.handleChange}
              />
              <div className="text-center">
                <MDBBtn gradient="blue" onClick={this.adaugaCabluri}>
                  Adaugă comanda
                </MDBBtn>
              </div>
            </form>
          </Cell>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Formular;
