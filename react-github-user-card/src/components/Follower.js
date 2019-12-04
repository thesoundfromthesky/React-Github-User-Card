import React, { Component } from "react";

export default class Follower extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      follower: { avatar_url, login, followers_url }
    } = this.props;
    return (
      <div className="follower card">
        <div className="card-img">
          <img src={avatar_url} alt="avatar of follower" />
        </div>
        <div className="card-content">
          <div className="card-name">{login}</div>
          <div>{followers_url}</div>
        </div>
      </div>
    );
  }
}
