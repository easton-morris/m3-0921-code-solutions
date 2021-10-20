import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { valid: false, errMsg: 'A password is required.', password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validCheck(password) {
    const re1 = /[(A-Z)]/;
    const re2 = /[\d]/;
    const re3 = /[(!@#$%^&*())]/;
    if (password.length === 0) {
      this.setState({
        valid: false, errMsg: 'A password is required.'
      });
    } else if (password.length > 0 && password.length < 8) {
      this.setState({
        valid: false, errMsg: 'Your password is too short.'
      });
    } else if (password.length >= 8 && re1.test(password) && re2.test(password) && re3.test(password)) {
      this.setState({
        valid: true
      });
    } else if (password.length >= 8 && !re1.test(password)) {
      this.setState({
        valid: false, errMsg: 'Your password must contain a capital letter.'
      });
    } else if (password.length >= 8 && !re2.test(password)) {
      this.setState({
        valid: false, errMsg: 'Your password must contain a number.'
      });
    } else if (password.length >= 8 && !re3.test(password)) {
      this.setState({
        valid: false, errMsg: 'Your password must contain a special character [!, @, #, $, %, ^, &, *, (, or )].'
      });
    }
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.validCheck(value);

    this.setState({
      [name]: value
    });

  }

  handleSubmit(event) {
    if (this.state.valid === true) {
      alert(this.state.password);
      event.preventDefault();
      this.setState({
        valid: false, errMsg: 'A password is required.', password: ''
      });
    } else {
      event.preventDefault();
    }
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit} action="">
      <label htmlFor="password">Password</label>
      <input onChange={this.handleChange} name="password" id="password" type="password" value={this.state.password} />
      <input type="submit" value="Sign In"/>
      <div>
        <i className={this.state.valid ? 'fas fa-check' : 'fas fa-times'}></i>
        {this.state.valid ? null : <span>{this.state.errMsg}</span> }
      </div>
    </form>
    );
  }
}

export default ValidatedInput;
