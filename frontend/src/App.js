import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
import Hello from './Hello'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Chess Hacker</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to Chess Hacker</h1>
          </Grid>
        </Jumbotron>
        <Grid>
          <Hello />
        </Grid>
      </div>
    );
  }
}

export default App;
