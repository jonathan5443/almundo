import axios from "axios";

export default class Api {
  constructor() {
    this.url = "http://localhost:3000"
  }
  getHotels(params = { term: "" }) {
    return axios.get(`${this.url}/hotels?term=${params.term}`)
  }
}