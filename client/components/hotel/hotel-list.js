import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HotelDetail from "./hotel-detail.js";
import Api from "../../services/api";

class HotelList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.hotels.length > 0 ? (
            this.props.hotels.map((hotel) =>
              <HotelDetail key={hotel.id} hotel={hotel} />
            )
          ) : (
              <p>No hay resultados</p>
            )
        }
      </div>

    )
  }
}

export default HotelList;
