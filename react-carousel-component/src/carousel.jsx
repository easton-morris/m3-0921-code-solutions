import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { caroNum: 1, intId: null };
    this.arrowClickHandler = this.arrowClickHandler.bind(this);
    this.iconClickHandler = this.iconClickHandler.bind(this);
    this.IconItem = this.IconItem.bind(this);
    this.IconList = this.IconList.bind(this);
    this.picTimer = this.picTimer.bind(this);
  }

  picTimer(prevIntId) {
    if (prevIntId) {
      clearInterval(prevIntId);
    }
    const intId = setInterval(() => {
      if (this.state.caroNum !== (this.props.pics.length)) {
        this.setState({ caroNum: (this.state.caroNum + 1) });
      } else if (this.state.caroNum === (this.props.pics.length)) {
        this.setState({ caroNum: 1 });
      }
    }, 3000);
    this.setState({ intId: intId });
    return intId;
  }

  arrowClickHandler(event) {
    if (event.target.className === 'fas fa-arrow-right' && this.state.caroNum !== (this.props.pics.length)) {
      this.setState({ caroNum: (this.state.caroNum + 1) });
    } else if (event.target.className === 'fas fa-arrow-right' && this.state.caroNum === (this.props.pics.length)) {
      this.setState({ caroNum: 1 });
    } else if (event.target.className === 'fas fa-arrow-left' && this.state.caroNum !== 1) {
      this.setState({ caroNum: (this.state.caroNum - 1) });
    } else if (this.state.caroNum === 1) {
      this.setState({ caroNum: (this.props.pics.length) });
    }
    this.picTimer(this.state.intId);
  }

  iconClickHandler(event) {

    this.picTimer(this.state.intId);

    this.setState({ caroNum: parseFloat(event.target.id) });

  }

  IconItem(props) {
    return (
      <i className={props.isShowing} id={props.iconId}></i>
    );
  }

  IconList(props) {
    const pics = props.pics;
    const picList = pics.map(pic =>
      <this.IconItem iconId={pic.id} key={pic.id} isShowing={(this.state.caroNum) === (pic.id) ? 'fas fa-dot-circle' : 'far fa-dot-circle'} />
    );

    return (
      <ul className="iconArea">
        {picList}
      </ul>
    );
  }

  componentDidMount() {
    this.picTimer(this.state.intId);
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
        <i onClick={this.arrowClickHandler} className="fas fa-arrow-left"></i>
        <this.CaroPic picUrl={this.props.pics[(this.state.caroNum - 1)].path} charName={this.props.pics[this.state.caroNum - 1].char} />
        <i onClick={this.arrowClickHandler} className="fas fa-arrow-right"></i>
      </div>
        <div onClick={this.iconClickHandler} className="iconContainer">
        <this.IconList pics={this.props.pics}/>
      </div>
      </div>
    );
  }

}

export default Carousel;
