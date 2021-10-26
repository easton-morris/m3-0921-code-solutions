import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = { openArea: null };
    this.closeAll = this.closeAll.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.DetailArea = this.DetailArea.bind(this);
    this.DogList = this.DogList.bind(this);
  }

  closeAll() {
    this.setState({
      openArea: null
    });
  }

  clickHandler(event) {
    if (this.state.openArea && event.target.id !== this.state.openArea) {
      this.closeAll();
      this.setState({ openArea: event.target.id });
    } else if (!this.state.openArea) {
      this.setState({ openArea: event.target.id });
    } else if (this.state.openArea && event.target.id === this.state.openArea) {
      this.closeAll();
    }
  }

  DetailArea(props) {
    return (
      <div>
        <h1 id={props.id} onClick={this.clickHandler}>
          {props.title}
        </h1>
        <div className={props.isOpen ? 'history' : 'history hidden' }>
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
      <this.DetailArea id={detail.id} key={detail.id} title={detail.breed} value={detail.dogHist} isOpen={detail.id.toString() === this.state.openArea} />
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
