import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.closeAll = this.closeAll.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.DetailArea = this.DetailArea.bind(this);
    this.DogList = this.DogList.bind(this);
  }

  closeAll() {
    if (this.state.open === true) {
      const openDetails = document.getElementsByClassName('history');
      for (let ii = 0; ii < openDetails.length; ii++) {
        openDetails[ii].className = 'history hidden';
      }
    }
  }

  clickHandler(event) {
    if (event.currentTarget.nextElementSibling.className === 'history hidden') {
      this.closeAll();
      event.currentTarget.nextElementSibling.className = 'history';
      this.setState({ open: true });
    } else if (event.currentTarget.nextElementSibling.className === 'history') {
      event.currentTarget.nextElementSibling.className = 'history hidden';
      this.setState({ open: false });
    }
  }

  DetailArea(props) {
    return (
      <div>
        <h1 onClick={this.clickHandler}>
          {props.title}
        </h1>
        <div className="history hidden">
          <p className="historyDetails">
            {props.value}
          </p>
        </div>
      </div>
    );
  }

  DogList(props) {
    const details = props.details;
    const doggieList = details.map(detail =>
      <this.DetailArea key={detail.breed} title={detail.breed} value={detail.dogHist} />
    );
    return (
      doggieList
    );
  }

  render() {
    return (
      <ul className="dogList">
        <this.DogList details={this.props.details} />
      </ul>
    );
  }

}

export default Accordion;
