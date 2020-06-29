/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="https://www.creative-tim.com">
                Creative Tim
              </a>
            </li>{" "}
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.creative-tim.com/presentation"
              >
                About us
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="https://blog.creative-tim.com">
                Blog
              </a>
            </li>
          </ul>
          <div className="copyright">
            © {new Date().getFullYear()} made with{" "}
            <i className="tim-icons icon-heart-2" /> by{" "}
            <a href="javascript:void(0)" target="_blank">
              Creative Tim
            </a>{" "}
            for a better web.
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
