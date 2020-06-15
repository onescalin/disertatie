import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import { Grid, Cell } from "react-mdl";

class Cabluri extends Component {
  render() {
    return (
      <div className="comenzi-body">
        <Grid className="comenzi-grid">
          <Cell col={12}>
            <h4>
              {this.props.denumirea} - {this.props.culoarea}
            </h4>
            <h6>
              Cantitate [ml]: {this.props.cantitatea}
              <MDBBtn
                gradient="blue"
                className="float-right"
                id={this.props.id}
                onClick={this.props.stergeCabluri}
              >
                Livrare
              </MDBBtn>
            </h6>
            <p>Clientul: {this.props.clientul}</p>
            <p>Ambalare: {this.props.ambalare}</p>
            <hr />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Cabluri;
