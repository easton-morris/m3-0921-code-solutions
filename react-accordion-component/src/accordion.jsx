import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.clickHandler = this.clickHandler.bind(this);
    this.DetailArea = this.DetailArea.bind(this);
    this.DogList = this.DogList.bind(this);
  }

  clickHandler(event) {
    if (event.target.className === 'history hidden') {
      event.target.className = 'history';
    } else {
      event.target.className = 'history hidden';
    }
  }

  DetailArea(props) {
    return (
      <div>
        <h1>
          {props.key}
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
      <this.DetailArea onClick={this.clickHandler} key={detail.breed} value={detail.dogHist} />
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
