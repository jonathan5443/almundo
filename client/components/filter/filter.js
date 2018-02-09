import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      stars: []
    };
    this.setStarFilter = this.setStarFilter.bind(this);
    this.setSearchFilter = this.setSearchFilter.bind(this);
  }

  setStarFilter(e) {
    const elementIndex = this.state.stars.indexOf(e.target.value);
    this.setState({
      stars: elementIndex === -1 ? [...this.state.stars, e.target.value] : [...this.state.stars.slice(0, elementIndex),
      ...this.state.stars.slice(elementIndex + 1, this.state.stars.length)]
    }, () => {
      this.props.filterData({ term: this.state.searchTerm, stars: this.state.stars })
    })
  }

  setSearchFilter(e) {
    this.setState({
      searchTerm: e.target.value
    }, () => {
      this.props.filterData({ term: this.state.searchTerm, stars: this.state.stars })
    })
  }

  starsRender(starsNumber) {
    let stars = [];
    stars.push(<input onChange={this.setStarFilter} type="checkbox" name="stars[]" value={starsNumber} />)
    for (let i = 0; i < starsNumber; i++) {
      stars.push(<img className="star" key={i} src={require("../../assets/icons/filters/star.svg")} />)
    }
    stars.push(<br />)
    return stars
  }

  render() {
    return (
      <div className="row filters">
        <div className="title">
          <h2>Filtros</h2>
        </div>
        <div className="search">
          <h2>
            <img src="" src={require("../../assets/icons/filters/search.svg")} />
            Nombre del hotel
          </h2>
          <form>
            <input type="text" placeholder="ingrese el nombre del hotel a buscar" onChange={this.setSearchFilter} />
          </form>
        </div>
        <div className="stars">
          <h2>
            <img src="" src={require("../../assets/icons/filters/star.svg")} />
            Estrellas
          </h2>
          <div>
            {this.starsRender(5)}
            {this.starsRender(4)}
            {this.starsRender(3)}
            {this.starsRender(2)}
            {this.starsRender(1)}
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
