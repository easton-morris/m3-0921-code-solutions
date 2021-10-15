import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggled: true };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState(prevState => (
      { toggled: !prevState.toggled }
    ));
  }

  render() {
    return <div>
      <div onClick={this.clickHandler} className={ `switch ${this.state.toggled ? 'switchedOn' : 'switchedOff'}` }></div>
      <button onClick={this.clickHandler} className={this.state.toggled ? 'on' : 'off'}></button>
      <span className="label">{this.state.toggled ? 'ON' : 'OFF'}</span>
    </div>;
  }
}

export default ToggleSwitch;
