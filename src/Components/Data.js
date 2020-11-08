import React, {Component} from 'react';
import api from '../utils/api';
import Table from './Table';

class Data extends Component {

    state = {
        users: []
    }
    componentDidMount() {
        api.randomUsers().then(results => {
            this.setState({
                users: results.data.results
            })
            console.log(results);
            console.log(this.state.users)
        })
    }

render() {
    return (
       <Table users={this.state.users} />
    )
}

}

export default Data;