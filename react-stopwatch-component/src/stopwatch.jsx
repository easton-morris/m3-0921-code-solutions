import React from 'react';

class StopWatch extends React.Component {

  constructor(props) {
    super(props);

    this.state = { time: 0, paused: true, };
    this.buttonClick = this.buttonClick.bind(this);
    this.faceClick = this.faceClick.bind(this);
  }

  timeHandler() {
    if (this.state.paused === false) {

      const intId = setInterval(
        () => this.setState(prevState => ({time: prevState.time++})), 1000
      );
    } else {
      clearInterval(intId);
    }
  }

  buttonClick() {
    this.setState(prevState => ({
      paused: !prevState.paused
    }));

    timeHandler();
  }

  faceClick() {
    if (this.state.paused === true) {
      this.setState(prevState => ({
        time: 0
      }))
    }
  }

  render() {
    <div onClick={this.faceClick} className="watchBody">
      <div className="watchFace">
        <span>{ this.state.time }</span>
      </div>
      <i onClick={this.buttonClick} className={this.state.paused ? 'fas fa-pause' : 'fas fa-play'}></i>
    </div>
  }
}

export default StopWatch;
