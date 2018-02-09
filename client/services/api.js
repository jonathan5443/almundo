import axios from "axios";

export default class Api {
  constructor() {
    this.url = "http://localhost:3000"
  }
  getHotels(params = { term: "", stars: ["1", "2", "3", "4", "5"] }) {
    const stars = params.stars.length > 0 ? params.stars : ["1", "2", "3", "4", "5"];
    return axios.get(`${this.url}/hotels`, {
      params: {
        term: params.term,
        stars
      }
    })
  }
}