import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isClicked ? 'Thanks!' : 'Click me!'}
      </button>
    );
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: true
    }));
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
