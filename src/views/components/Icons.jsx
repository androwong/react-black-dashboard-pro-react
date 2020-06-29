import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import icons from "variables/icons.jsx";

class Icons extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">100 Awesome Nucleo Icons</h5>
                  <p className="category">
                    Handcrafted by our friends from{" "}
                    <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
                  </p>
                </CardHeader>
                <CardBody className="all-icons">
                  <Row>
                    {icons.map((prop, key) => {
                      return (
                        <Col
                          className="font-icon-list col-xs-6 col-xs-6"
                          lg="2"
                          md="3"
                          sm="4"
                          key={key}
                        >
                          <div className="font-icon-detail">
                            <i className={"tim-icons " + prop.name} />
                            <p>{prop.name}</p>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Icons;
