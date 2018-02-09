import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HotelDetail extends Component {
  constructor(props) {
    super(props);
    this.hotel = this.props.hotel;
  }

  starsRender(starsNumber) {
    let stars = []
    for (let i = 0; i < starsNumber; i++) {
      stars.push(<img className="star" src={require("../../assets/icons/filters/star.svg")} key={i} />
      )
    }
    return stars
  }

  amenitiesRender(amenities) {
    let amenitiesRender = []
    const amenitiesArray = amenities.split(",")
    for (let i = 0; i < amenitiesArray.length; i++) {
      amenitiesRender.push(<img className="amenity" src={require(`../../assets/icons/amenities/${amenitiesArray[i]}.svg`)} key={i} />
      )
    }
    return amenitiesRender
  }

  render() {
    return (
      <div className="row hotel-detail">
        <div className="col-4 image-container">
          <img src={require(`../../assets/hotels/${this.hotel.image}`)} alt={this.hotel.name} />
        </div>
        <div className="col-5 info-container">
          <p className="name">{this.hotel.name}</p>
          {this.starsRender(this.hotel.stars)}<br />
          {this.amenitiesRender(this.hotel.amenities)}
        </div>

        <div className="col-3 price-container">
          <p className="copy">Precio por noche por habitacion</p>
          <p className="price">ARS <span>{this.hotel.price}</span></p>
          <button className="button">Ver hotel</button>
        </div>
      </div>
    );
  }
}

export default HotelDetail;
