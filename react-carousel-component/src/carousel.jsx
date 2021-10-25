import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.state = { active: true, caroNum: 0 };
  }

  clickHandler(event) {
    if (event.target.className === 'fas fa-arrow-right' && this.state.caroNum !== (this.props.pics.length - 1)) {
      this.setState({ caroNum: this.state.caroNum + 1, active: false });
    } else if (this.state.caroNum === this.props.pics.length) {
      this.setState({ caroNum: 0, active: false });
    } else if (event.target.className === 'fas fa-arrow-left' && this.state.caroNum !== 0) {
      this.setState({ caroNum: this.state.caroNum - 1, active: false });
    } else if (this.state.caroNum === 0) {
      this.setState({ caroNum: this.props.pics.length, active: false });
    }
  }

  CaroPic(props) {
    return (
      <div className="caroPicArea">
       <img className="caroPic" src={props.picUrl} alt={props.charName} />
      </div>
    );
  }

}

export default Carousel;
