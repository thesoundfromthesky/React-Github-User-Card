import "./App.css";
import React, { Component } from "react";
import User from "./components/User";
import Followers from "./components/Followers";

export default class App extends Component {
  constructor() {
    super();
    this.state = { user: {}, followers: [] };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/thesoundfromthesky")
      .then(response => response.json())
      .then(result => {
        this.setState({
          user: {
            avatar_url: result.avatar_url,
            login: result.login,
            bio: result.bio
          }
        });

        fetch("https://api.github.com/users/thesoundfromthesky/followers")
          .then(response => response.json())
          .then(result => {
            this.setState(prev => ({ ...prev, followers: result }));
          });
      });
  }

  render() {
    return (
      <div className="container">
        <User user={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}
