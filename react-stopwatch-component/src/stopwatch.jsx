import React from 'react';

class StopWatch extends React.Component {

  constructor(props) {
    super(props);

    this.state = { time: 0, paused: true };
    this.buttonClick = this.buttonClick.bind(this);
    this.faceClick = this.faceClick.bind(this);
  }

  componentDidUpdate() {
    if (!this.intID && this.state.paused === false) {
      this.intID = setInterval(() =>
        this.tick(), 1000
      );
    } else if (this.intID && this.state.paused === true) {
      clearInterval(this.intID);
      this.intID = null;
    }
  }

  tick() {
    const newTime = this.state.time + 1;
    this.setState(
      { time: newTime }
    );
  }

  buttonClick() {
    this.setState(prevState => ({
      paused: !prevState.paused
    }));
  }

  faceClick() {
    if (this.state.paused === true) {
      this.setState({
        time: 0
      });
    }
  }

  render() {
    return <div className="watchBody">
      <div onClick={this.faceClick} className="watchFace">
        <span>{ this.state.time }</span>
      </div>
      <i onClick={this.buttonClick} className={this.state.paused ? 'fas fa-play' : 'fas fa-pause'}></i>
    </div>;
  }
}

export default StopWatch;
