import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Despre extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <img
              src="http://electricgroup.ml/img/despre.jpg"
              alt="avatar"
              style={{ height: "600px" }}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Despre;
