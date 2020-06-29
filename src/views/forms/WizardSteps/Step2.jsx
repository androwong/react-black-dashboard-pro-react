import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";

class Wizard extends React.Component {
  render() {
    return (
      <>
        <h5 className="info-text">Who are you? (Fileinput)</h5>
        <Row className="justify-content-center">
          <Col className="text-center" lg="10">
            <ImageUpload
              changeBtnClasses="btn-simple"
              addBtnClasses="btn-simple"
              removeBtnClasses="btn-simple"
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Wizard;
