import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Electric Group SRL</h2>
            <img
              src="http://electricgroup.ml/poze/fundal%20EGR.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              DEPOZIT CLUJ 400397 - Cluj-Napoca Str. Traian Vuia, Nr. 220
              <p>ORAR FUNCTIONARE Luni-Vineri: 08:00 - 17:00</p>
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contacteaza-ne</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +40 264 274 086
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    +40 264 274 087
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    office@electricgroup.ro
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
          <div className="contact-links">
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
            <a href="http://youtube.com">
              <MDBContainer>
                <MDBBtn size="sm" tag="a" floating social="yt">
                  <MDBIcon fab icon="youtube" />
                </MDBBtn>
              </MDBContainer>
            </a>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Contact;
