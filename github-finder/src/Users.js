import React, { Component } from 'react';
import axios from 'axios';
export class Users extends Component {
    state = {
        data: []
    }
    handleKeyup = (e) => {
        let inputvalue = e.target.value;
        if (inputvalue !== "") {
            axios.get(`https://api.github.com/users/${inputvalue}`)
                .then(response => {


                    this.setState({
                        data: response.data
                    })




                })




        } else {
            this.setState({
                data: ""
            })
        }



    }
    render() {

        const { data } = this.state
        const UsersData = data ? (

            <div className="container d-flex justify-content-evenly flex-wrap mt-5 ">
                <div className="mt-3 ms-2">
                    <img src={data.avatar_url} className="img-fluid d-block" alt="" />

                    <a href={data.html_url} target="" className="btn btn-primary btn-lg btn-block mx-auto d-block mt-3 mb-3 ">
                        View Profile
                  </a>
                </div>
                <div className="mt-3">
                    <div className="text-center container-fluid d-block mx-auto">
                        <span className="badge  bg-primary">Public_Repos : {data.public_repos}</span>
                        <span className="badge bg-secondary ">Public_Gists : {data.public_gists}</span>
                        <span className="badge bg-success ">Followers : {data.followers}</span>
                        <span className="badge bg-danger p-1">Following : {data.following}</span>
                    </div>
                    <div className="card mt-3 d-block mx-auto">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item ">Name : {data.name}</li>
                            <li className="list-group-item ">Location : {data.location}</li>
                            <li className="list-group-item ">Comapny : {data.company}</li>
                            <li className="list-group-item ">Website/Blog : {data.blog}</li>
                            <li className="list-group-item ">Member Since : {data.created_at}</li>
                            <li className="list-group-item ">Last Updated In : {data.updated_at}</li>
                        </ul>
                    </div>
                </div>
            </div>


        ) : (

                <div className="container alert alert-danger mt-3 text-center" role="alert">
                    <h4 className="alert-heading">Please type your username!</h4>


                </div>

            );

        return (
            <div>
                <div className="users">
                    <div className="card text-center bg-light">
                        <div className="card-body">
                            <h5 className="card-title">Search Guthub Users</h5>
                            <p className="card-text">Enter a Username to fetch profile info & Repos </p>
                            <div className="input-group mb-3 container ">
                                <span className="input-group-text" id="Input">@</span>
                                <input type="text" onKeyUp={this.handleKeyup} className="form-control" id="Input" placeholder="Write Your Username Here" aria-label="Username"
                                    aria-describedby="Input" />

                            </div>
                        </div>
                    </div>
                </div>
                {UsersData}
            </div>
        )
    }
}

export default Users
