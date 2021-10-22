import React from 'react';

function DrawerMenu(props) {
  return (
    <div className="menu">
      <h1>Menu</h1>
      <ul>
        <li onClick={props.onClick}>About</li>
        <li onClick={props.onClick}>Get Started</li>
        <li onClick={props.onClick}>Sign In</li>
      </ul>
    </div>
  );
}

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { menu: false };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState(
      { menu: !this.state.menu }
    );
  }

  render() {
    return (
      <div className="container">
        {this.state.menu ? null : <i className="fas fa-bars" onClick={this.clickHandler}></i>}
        {this.state.menu ? <div className="dimmer" onClick={this.clickHandler}></div> : null}
        {this.state.menu ? <DrawerMenu onClick={this.clickHandler} /> : null}
      </div>
    );
  }
}

export default AppDrawer;
