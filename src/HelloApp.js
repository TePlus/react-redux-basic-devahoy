import React from "react";

function Hello(props) {
  return <h1>Ahoy! {props.name}</h1>;
}

class HelloApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <React.Fragment>
        <Hello name="TePlus" />
        <p>{this.props.message}</p>
        <button onClick={this.handleClick}>Click Me!</button>
        <p>{this.state.counter}</p>
      </React.Fragment>
    );
  }
}

export default HelloApp;
