import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { button: true, switch: true, label: true };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState(prevState => (
      { button: !prevState.button, switch: !prevState.switch, label: !prevState.label }
    ));
  }

  render() {
    return <div>
      <div onClick={this.clickHandler} className={ `switch ${this.state.switch ? 'switchedOn' : 'switchedOff'}` }></div>
      <button onClick={this.clickHandler} className={this.state.button ? 'on' : 'off'}></button>
      <span className="label">{this.state.label ? 'ON' : 'OFF'}</span>
    </div>;
  }
}

export default ToggleSwitch;
