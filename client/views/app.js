import React from "react";
import Header from "../components/header/header";

export default class App extends React.Component {
  render() {
    return (
      <div className="mainWrapper">
        <Header />
        <div className="container contentWrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}
