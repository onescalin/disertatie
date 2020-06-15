import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Sortiment extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#blue",
                height: "176px",
                background:
                  "url(https://cdn.leroymerlin.ro/image/2000/2000/68321/5df8eaa25a8f0_20191217044802.jpg) center / cover"
              }}
            >
              Conductori rigizi
            </CardTitle>
            <CardText>Conductor rigid FY 1.5 pana la FY 16</CardText>
            <CardActions border>
              <Button colored>Fisa</Button>
              <Button colored>Culori</Button>
              <Button colored>Tensiune</Button>
            </CardActions>
            <CardMenu style={{ color: "#blue" }}>
              <IconButton name="®" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#blue",
                height: "176px",
                background:
                  "url(https://cdn.leroymerlin.ro/image/2000/2000/28184/5b8ed47e2ce2c_20180904095246.jpg) center / cover"
              }}
            >
              Conductori flexibili
            </CardTitle>
            <CardText>Conductor flexibil MYF 0.5 pana la MYF 16.</CardText>
            <CardActions border>
              <Button colored>Fisa</Button>
              <Button colored>Culori</Button>
              <Button colored>Tensiune</Button>
            </CardActions>
            <CardMenu style={{ color: "#blue" }}>
              <IconButton name="®" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#blue",
                height: "176px",
                background:
                  "url(https://cdn.leroymerlin.ro/image/2000/2000/68504/5df9f880e9d12_20191218115928.jpg) center / cover"
              }}
            >
              Conductori siliconici
            </CardTitle>
            <CardText>Conductor siliconi SIF 1.5 pana la SIF 16</CardText>
            <CardActions border>
              <Button colored>Fisa</Button>
              <Button colored>Culori</Button>
              <Button colored>Tensiune</Button>
            </CardActions>
            <CardMenu style={{ color: "#blue" }}>
              <IconButton name="®" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#blue",
                  height: "176px",
                  background:
                    "url(https://cdn.leroymerlin.ro/image/2000/2000/28356/5b8ed4a39976d_20180904095323.jpg) center / cover"
                }}
              >
                Cabluri flexibile
              </CardTitle>
              <CardText>
                Cabluri rigide CYY-F 3x1 pana la CYY-F 5x16, flexibile MYYM
                2x0,5 pana la MYYM 5x16.
              </CardText>
              <CardActions border>
                <Button colored>Fisa</Button>
                <Button colored>Culori</Button>
                <Button colored>Tensiune</Button>
              </CardActions>
              <CardMenu style={{ color: "#blue" }}>
                <IconButton name="®" />
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#blue",
                  height: "176px",
                  background:
                    "url(https://cdn.leroymerlin.ro/image/2000/2000/28408/5b8ed4a3a4369_20180904095323.jpg) center / cover"
                }}
              >
                Cabluri armate
              </CardTitle>
              <CardText>Aluminiu sau cupru cu armare in banda otel.</CardText>
              <CardActions border>
                <Button colored>Fisa</Button>
                <Button colored>Culori</Button>
                <Button colored>Tensiune</Button>
              </CardActions>
              <CardMenu style={{ color: "#blue" }}>
                <IconButton name="®" />
              </CardMenu>
            </Card>

            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#blue",
                  height: "176px",
                  background:
                    "url(https://cdn.leroymerlin.ro/image/2000/2000/58076/5db71c43ddd40_20191028065011.jpg) center / cover"
                }}
              >
                Cabluri rezistente la foc
              </CardTitle>
              <CardText>Cabluri E30, E60 , E90 si FE180</CardText>
              <CardActions border>
                <Button colored>Fisa</Button>
                <Button colored>Culori</Button>
                <Button colored>Tensiune</Button>
              </CardActions>
              <CardMenu style={{ color: "blue" }}>
                <IconButton name="®" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#blue",
                  height: "176px",
                  background:
                    "url(https://cdn.leroymerlin.ro/image/2000/2000/18660/5ade12c0dd293_20180423080712.jpeg) center / cover"
                }}
              >
                Cabluri semnalizare ecranate
              </CardTitle>
              <CardText>de la 2 la 28 fire flexibile</CardText>
              <CardActions border>
                <Button colored>Fisa</Button>
                <Button colored>Culori</Button>
                <Button colored>Tensiune</Button>
              </CardActions>
              <CardMenu style={{ color: "#blue" }}>
                <IconButton name="®" />
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#blue",
                  height: "176px",
                  background:
                    "url(https://cdn.leroymerlin.ro/image/2000/2000/19054/5ade130ff3504_20180423080831.jpeg) center / cover"
                }}
              >
                Cabluri semnalizare neecranate
              </CardTitle>
              <CardText>de la 2 la 28 fire flexibile.</CardText>
              <CardActions border>
                <Button colored>Fisa</Button>
                <Button colored>Culori</Button>
                <Button colored>Tensiune</Button>
              </CardActions>
              <CardMenu style={{ color: "#blue" }}>
                <IconButton name="®" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#blue",
                height: "176px",
                background:
                  "url(https://www.vwcable.com/wp-content/uploads/co-huatongcables/12-20kv-Single-Core-95mm2-185mm2-XLPE-Insulated-Copper-Wire-Shield-Aluminum-A2xs2y-Cable.jpg) center / cover"
              }}
            >
              Cabluri MT
            </CardTitle>
            <CardText>
              Cabluri cu izolatie PVC si Polietilena monofilare si multifilare
              de la 6kV la 36kV.
            </CardText>
            <CardActions border>
              <Button colored>Fisa</Button>
              <Button colored>Culori</Button>
              <Button colored>Tensiune</Button>
            </CardActions>
            <CardMenu style={{ color: "#blue" }}>
              <IconButton name="®" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Conductori</Tab>
          <Tab>Cabluri de energie</Tab>
          <Tab>Cabluri de semnalizare</Tab>
          <Tab>Cabluri de medie tensiune</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br> <br></br>
        <br></br>
      </div>
    );
  }
}

export default Sortiment;
