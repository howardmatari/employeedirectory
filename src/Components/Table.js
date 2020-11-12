import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {Component} from 'react';
import api from "../utils/api";



class Table extends Component {
    state = {
        users: [],
        order: "ascend",
        sortUser: [],
        filterTerm: "",
        filteredUsers:[]
    }
     
    handleChange = (event) => {
        this.setState({filterTerm: event.target.value});

    }

    handleSubmit =() => {
         const filteredUsers=this.state.users.filter(user=>user.name.first.includes(this.state.filterTerm))
         this.setState({filteredUsers})
    }

    componentDidMount() {
        api.randomUsers().then((results) => {
          this.setState({
            users: results.data.results, filteredUsers: results.data.results
          });
          console.log(results);
          console.log(this.state.users);
        });
      }
    handleSort = (name) => {
        if (this.state.order === "ascend") {
          this.setState({users:this.state.users.sort((a,b) => b.name.first > a.name.first? 1:-1)})
          this.setState({
            order: "descend",
           
          })
          console.log("descend");
        } else {
            this.setState({users:this.state.users.sort((a,b) => b.name.first < a.name.first? 1:-1)})
          this.setState({
            order: "ascend",
          })
          console.log("ascend");
        }
      };

      handleSort = (email) => {
        if (this.state.order === "ascend") {
          this.setState({users:this.state.users.sort((a,b) => b.email > a.email? 1:-1)})
          this.setState({
            order: "descend",
           
          })
          console.log("descend");
        } else {
            this.setState({users:this.state.users.sort((a,b) => b.email < a.email? 1:-1)})
          this.setState({
            order: "ascend",
          })
          console.log("ascend");
        }
      };


    //   const checkUsernameFilter = user =>(
    //     user.name
    //       .toLowerCase()
    //       .indexOf(this.state.filterUsers.toLowerCase()) !== -1

      render(){

      
    return (
    
        <div>
        <label>
          Name:
          <input type="text" value={this.state.filterTerm} onChange={this.handleChange} />
        </label>
        <input type="button" onClick={this.handleSubmit} value="Submit" />
        
    
        <table>
        <thead>
        <td>Image</td>
        <td onClick={ this.handleSort}> Name
        
        {
            this.state.order === "descend" ?  <FontAwesomeIcon icon={faAngleUp} /> :  <FontAwesomeIcon icon={faAngleDown} /> 
        }
        </td>
        <td>Email</td> 
        <td>Phone</td>
        </thead>
        {this.state.filteredUsers.map(({ name, login, picture, email, phone }) => {
            return (
                <tr key={phone}>
                <td><img src={picture.medium}
                        alt={"employee picture"}/></td>
                <td>{name.title} {name.first} {name.last}</td>
                <td>{email}</td>
                <td>{phone}</td>
                
                </tr>
            )
        })}
        </table>
          </div>
    )}
}

export default Table;