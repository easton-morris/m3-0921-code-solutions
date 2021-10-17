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
      console.log('setInt ran', this.state.time);
    } else if (this.intID && this.state.paused === true) {
      clearInterval(this.intID);
      this.intID = null;
      console.log('clear ran');
    }
  }

  tick() {
    let newTime = this.state.time + 1;
    console.log(newTime);
    this.setState(prevState => (
      { time: newTime }
    ));
    console.log('tick ran', this.state.time);
  }


  buttonClick() {
    this.setState(prevState => ({
      paused: !prevState.paused
    }));
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
    return <div className="watchBody">
      <div onClick={this.faceClick} className="watchFace">
        <span>{ this.state.time }</span>
      </div>
      <i onClick={this.buttonClick} className={this.state.paused ? 'fas fa-play' : 'fas fa-pause'}></i>
    </div>;
  }
}

export default StopWatch;
