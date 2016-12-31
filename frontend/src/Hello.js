import React, { Component } from 'react';

export default class Hello extends Component {
  constructor() {
    super();
    this.state = {
      name: false
    };
  }

  componentDidMount() {
    const url = `/api/hello/v1/${this.props.name}`;
    const fetchOptions = {
      mode: 'cors',
      headers: { 'Accept': 'application/json' }
    };
    fetch(url, fetchOptions)
      .then(response => response.json())
      .then(json => this.setState({ name: json.name }))
      .catch(console.error);
  }

  render() {
    const name = this.state.name;
    return name ? <p>Hello {name}!</p> : null;
  }
}
Hello.propTypes = {
  name: React.PropTypes.string
}
Hello.defaultProps = {
  name: 'steve'
}
