import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { caroNum: 0, active: true };
    this.arrowClickHandler = this.arrowClickHandler.bind(this);
    this.iconClickHandler = this.iconClickHandler.bind(this);
  }

  arrowClickHandler(event) {
    if (event.target.className === 'fas fa-arrow-right' && this.state.caroNum !== (this.props.pics.length - 1)) {
      this.setState({ caroNum: (this.state.caroNum + 1), active: false });
    } else if (this.state.caroNum === this.props.pics.length) {
      this.setState({ caroNum: 0, active: false });
    } else if (event.target.className === 'fas fa-arrow-left' && this.state.caroNum !== 0) {
      this.setState({ caroNum: (this.state.caroNum - 1), active: false });
    } else if (this.state.caroNum === 0) {
      this.setState({ caroNum: (this.props.pics.length - 1), active: false });
    }
  }

  iconClickHandler(event) {
    if (event.target.className === 'far fa-dot-circle') {
      event.target.className = 'fas fa-dot-circle';
    }

    const iconList = document.getElementsByName('i');

    for (let ii = 0; ii < iconList.length; ii++) {
      iconList[ii].className = 'far fa-dot-circle';
    }

    this.setState({ caroNum: event.target.iconId, active: false });

  }

  IconItem(props) {

  }

  IconList(props) {

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.active === false) {
      window.setInterval();
    }
  }

  CaroPic(props) {
    return (
       <img className="caroPic" src={props.picUrl} alt={props.charName} />
    );
  }

  render() {
    return (
      <div>
      <div className="caroArea">
        <i className="fas fa-arrow-left"></i>
        <this.CaroPic picUrl={this.props[this.state.caroNum].URL} charName={this.props[this.state.caroNum].char} />
        <i className="fas fa-arrow-right"></i>
      </div>
      <div>
        <this.IconList />
      </div>
      </div>
    );
  }

}

export default Carousel;
