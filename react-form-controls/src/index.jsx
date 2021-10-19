import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('Email:', this.state.value);
    event.preventDefault();
  }

  render() {
    return (<form id="newsletter" onSubmit={this.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" value={this.state.value} onChange={this.handleChange}/>
      <button>
        Submit
      </button>
    </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.getElementById('root')
);
