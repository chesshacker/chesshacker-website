import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class Projects extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={12}>
              <h2>Chess Toolkit</h2>
              <p className="lead">In 2013, I decided to package some of my work as a reusable library, which I dubbed the <a href="https://github.com/steve-ortiz/chess_toolkit">Chess Toolkit</a> and released under the Apache License.</p>
              <p>The Chess Toolkit understands the rules of chess, Forsyth-Edwards Notation (FEN), Short Algebraic Notation (SAN), and the basics of Portable Game Notation (PGN). It is about 4,000 source lines of code for the library, 4,000 lines of tests, and 1,000 lines of examples. It also includes a detailed <a href="https://github.com/steve-ortiz/chess_toolkit/blob/master/MANUAL.md">Manual.</a> It is mostly written in C, but includes some yacc and lex to perform the text parsing, and the examples also include Ruby. The library is packaged using standard autoconf tools, and the unit tests use GNU Check.</p>
            </Col>
          </Row>
        </Grid>
        <div className="contrasting-container">
          <Grid>
            <Row>
              <Col md={5}>
                <a href="https://chess-demo.ortizaggies.com"><Image src="https://photos.smugmug.com/photos/i-mnhVmHG/0/O/i-mnhVmHG.jpg" style={{marginTop:'66px', marginBottom: '10px', border: '1px solid blue'}} responsive /></a>
              </Col>
              <Col md={7}>
                <h2>Chess Demo</h2>
                <p className="lead">Building on the Chess Toolkit, and the the Ruby Gem included as an example, I wrote a small <a href="https://github.com/chesshacker/chess-toolkit-demo">Chess Demo</a> using Rails 4 and jQuery. The development environment uses Docker Compose; and it is deployed on Google Cloud Platform with Google Container Engine and Cloud SQL.</p>
                <p>This demonstration also ties into some of my other work, where I processed millions of chess games, scored them using a unique algorithm of my own invention, and saved the results in a MySQL database. The score for each position equates directly to a shift in the player’s Elo rating; or to put it simply, positive scores are better for white and negative is better for black.</p>
              </Col>
            </Row>
          </Grid>
        </div>
        <Grid>
          <Row>
            <Col md={12}>
              <h2>ChessHacker.com</h2>
              <p><a href="https://github.com/chesshacker/chesshacker-website">This website</a> was deployed on Google App Engine using Travis-CI for deployment automation. The front-end is written as a single-page app using React. The backend is written with Go. There isn't much to it yet, but I plan to expand this in the near future. I am currently developing a <a href="https://github.com/chesshacker/chess">new chess library,</a> written in JavaScript, and that will likely be followed by a React chess board, and another chess demo of some sort.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Projects;
