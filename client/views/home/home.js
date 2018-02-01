import React, { Component } from "react";
import Filter from "../../components/filter/filter";
import HotelList from "../../components/hotel/hotel-list";

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <Filter />
        </div>
        <div className="col-9">
          <HotelList />
        </div>
      </div>
    );
  }
}

export default Home;
