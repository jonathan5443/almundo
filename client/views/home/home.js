import React, { Component } from "react";
import Filter from "../../components/filter/filter";
import HotelList from "../../components/hotel/hotel-list";
import Api from "../../services/api";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
    this.fetchHotelsData = this.fetchHotelsData.bind(this);
  }

  componentDidMount() {
    this.fetchHotelsData();
  }

  fetchHotelsData(params) {
    const api = new Api();
    api.getHotels(params).then((hotels) => {
      this.setState({
        hotels: hotels.data
      })
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <Filter filterData={this.fetchHotelsData} />
        </div>
        <div className="col-9">
          <HotelList hotels={this.state.hotels} />
        </div>
      </div>
    );
  }
}

export default Home;
