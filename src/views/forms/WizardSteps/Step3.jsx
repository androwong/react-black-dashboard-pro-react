import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import { FormGroup, Input, Row, Col } from "reactstrap";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step3Select: null
    };
  }
  render() {
    return (
      <>
        <form>
          <Row className="justify-content-center">
            <Col sm="12">
              <h5 className="info-text">Are you living in a nice area?</h5>
            </Col>
            <Col sm="7">
              <FormGroup>
                <label>Street Name</label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup>
                <label>Street No.</label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col sm="5">
              <FormGroup>
                <label>City</label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col sm="5">
              <FormGroup>
                <label>Country</label>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  name=""
                  onChange={value => this.setState({ step3Select: value })}
                  value={this.state.step3Select}
                  options={[
                    {
                      value: "Afghanistan",
                      label: " Afghanistan "
                    },
                    { value: "Albania", label: " Albania " },
                    { value: "Algeria", label: " Algeria " },
                    {
                      value: "American Samoa",
                      label: " American Samoa "
                    },
                    { value: "Andorra", label: " Andorra " },
                    { value: "Angola", label: " Angola " },
                    { value: "Anguilla", label: " Anguilla " },
                    { value: "Antarctica", label: " Antarctica " }
                  ]}
                  placeholder="Single Select"
                />
              </FormGroup>
            </Col>
          </Row>
        </form>
      </>
    );
  }
}

export default Wizard;
