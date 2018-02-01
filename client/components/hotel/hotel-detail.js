import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HotelDetail extends Component {
  constructor(props) {
    super(props);
    this.hotel = this.props.hotel;
    this.starsMaker = this.starsMaker.bind(this);
  }

  starsMaker(starsNumber) {
    let stars = []
    for (let i = 0; i < starsNumber; i++) {
      stars.push(<img className="star" src={require("../../assets/icons/filters/star.svg")} alt={i} />
      )
    }
    return stars
  }

  render() {
    return (
      <div className="row hotel-detail">
        <div className="col-4">
          <img src={require(`../../assets/hotels/${this.hotel.image}`)} alt={this.hotel.name} />
        </div>
        <div className="col-5">
          <p>{this.hotel.name}</p>
          {this.starsMaker(this.hotel.stars)}
        </div>
        <div className="col-3">
          <p>{this.hotel.price}</p>
        </div>
      </div>
    );
  }
}

export default HotelDetail;
