import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

class Acasa extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="http://electricgroup.ml/poze/fundal%20EGR.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Mai mult decat energie !</h1>

              <hr />

              <p>Cabluri JT | Cabluri MT | Conductori |</p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MDBContainer>
                    <MDBBtn size="sm" tag="a" floating social="li">
                      <MDBIcon fab icon="linkedin-in" />
                    </MDBBtn>
                  </MDBContainer>
                </a>

                {/* Twittter */}
                <a
                  href="http://twitter.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MDBContainer>
                    <MDBBtn size="sm" tag="a" floating social="tw">
                      <MDBIcon fab icon="twitter" />
                    </MDBBtn>
                  </MDBContainer>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/ElectricGroup.ro"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MDBContainer>
                    <MDBBtn size="sm" tag="a" floating social="fb">
                      <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>
                  </MDBContainer>
                </a>

                {/* Youtube */}
                <a
                  href="http://youtube.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MDBContainer>
                    <MDBBtn size="sm" tag="a" floating social="yt">
                      <MDBIcon fab icon="youtube" />
                    </MDBBtn>
                  </MDBContainer>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Acasa;
