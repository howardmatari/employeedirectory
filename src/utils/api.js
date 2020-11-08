import axios from 'axios';

const requestURL = "https://randomuser.me/api/?results=100&nat=us"
export default {

    randomUsers: function(){
        return axios(requestURL, {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json',
            }
        })
    }}