import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { heat: 'level0', count: 0 };

    this.clickHandler = this.clickHandler.bind(this);
  }

  heatHandler() {
    if (this.state.count >= 3 && this.state.count < 6) {
      this.setState({ heat: 'level1' });
    } else if (this.state.count >= 6 && this.state.count < 9) {
      this.setState({ heat: 'level2' });
    } else if (this.state.count >= 9 && this.state.count < 12) {
      this.setState({ heat: 'level3' });
    } else if (this.state.count >= 12 && this.state.count < 15) {
      this.setState({ heat: 'level4' });
    } else if (this.state.count >= 15 && this.state.count < 18) {
      this.setState({ heat: 'level5' });
    } else if (this.state.count >= 18) {
      this.setState({ heat: 'level6' });
    }
  }

  clickHandler() {
    let newCount = this.state.count;
    newCount++;
    this.setState({ count: newCount });
    this.heatHandler();
  }

  render() {
    return <button onClick={this.clickHandler} heat={this.state.heat}>Hot Button</button>;
  }
}

export default HotButton;
