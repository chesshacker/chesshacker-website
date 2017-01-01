import './Footer.css';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Grid>
          <Row>
            <Col xs={12} className="text-center">
              <a title="LinkedIn" href="https://www.linkedin.com/in/chesshacker"><FontAwesome name='linkedin-square' /></a>
              <a title="GitHub" href="https://github.com/chesshacker"><FontAwesome name='github' /></a>
              <a title="Twitter" href="https://twitter.com/chesshacker"><FontAwesome name='twitter' /></a>
              <a title="Email" href="mailto:steve@ortizaggies.com"><FontAwesome name='envelope' /></a>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
