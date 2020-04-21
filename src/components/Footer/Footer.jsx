/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li style={{fontWeight: "bold"}}>
                <a href="https://www.cse.club/" target="_blank">CSE Club Scientifique de l'ESI</a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; {1900 + new Date().getYear()}, Coded by{" "}
            <a
              href="https://www.cse.club/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSE{" "}
            </a>
             with love.
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
