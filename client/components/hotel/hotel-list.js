import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HotelDetail from "./hotel-detail.js";

class HotelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [
        {
          "id": "249942",
          "name": "Hotel Stefanos",
          "stars": 3,
          "price": 994.18,
          "image": "4900059_30_b.jpg",
          "amenities": [
            "safety-box",
            "nightclub",
            "deep-soaking-bathtub",
            "beach",
            "business-center"
          ]
        },
        {
          "id": "161901",
          "name": "Hotel Santa Cruz",
          "stars": 3,
          "price": 1267.57,
          "image": "6623490_6_b.jpg",
          "amenities": [
            "nightclub",
            "business-center",
            "bathtub",
            "newspaper",
            "restaurant"
          ]
        },
      ]
    };

  }

  render() {
    return (
      this.state.hotels.map((hotel) =>
        <HotelDetail key={hotel.id} hotel={hotel} />
      )
    );
  }
}

export default HotelList;
