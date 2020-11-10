import React, { Component } from "react";
import api from "../utils/api";
import Table from "./Table";

class Data extends Component {
  state = {
    users: [],
    order: "ascend",
    sortUser: []
  };
  componentDidMount() {
    api.randomUsers().then((results) => {
      this.setState({
        users: results.data.results,
      });
      console.log(results);
      console.log(this.state.users);
    });
  }

  //if ascend .C
  //if descend .sort((a,b) => (b.name.first - a.name.first))
  handleSort = (name) => {
    if (this.state.order === "ascend") {
      this.setState({users:this.state.users.sort((a,b) => (b.name.first - a.name.first))})
      this.setState({
        order: "descend",
       
      })
      console.log("descend");
    } else {
      this.setState({
        order: "ascend",
      })
      console.log("ascend");
    }
  };
  render() {
    return <Table 
    users={this.state.users}
    order={this.state.order}
     />;
  }
}

export default Data;
