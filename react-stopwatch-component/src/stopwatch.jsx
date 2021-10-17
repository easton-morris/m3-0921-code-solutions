import React from 'react';

class StopWatch extends React.Component {

  constructor(props) {
    super(props);

    this.state = { time: 0, paused: true };
    this.buttonClick = this.buttonClick.bind(this);
    this.faceClick = this.faceClick.bind(this);
  }

  tick() {
    this.setState(prevState => ({
      time: prevState.time++
    }));
  }

  timeHandler() {
    let intID = 0;
    if (this.state.paused === false) {
      intID = setInterval(
        this.tick(), 1000
      );
    } else {
      clearInterval(intID);
    }
  }

  buttonClick() {
    this.setState(prevState => ({
      paused: !prevState.paused
    }));

    this.timeHandler();
  }

  faceClick() {
    if (this.state.paused === true) {
      this.setState(prevState => ({
        time: 0
      }))
    }
  }

  render() {
    console.log(this.state);
    return <div onClick={this.faceClick} className="watchBody">
      <div className="watchFace">
        <span>{ this.state.time }</span>
      </div>
      <i onClick={this.buttonClick} className={this.state.paused ? 'fas fa-play' : 'fas fa-pause'}></i>
    </div>;
  }
}

export default StopWatch;
