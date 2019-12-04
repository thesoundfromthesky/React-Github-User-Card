import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { avatar_url, login, bio } = this.props.user;
    return (
      <>
        <h2>User</h2>
        <hr />
        <div className="user card">
          <div className="card-img">
            <img src={avatar_url} alt="avatar of user" />
          </div>
          <div className="card-content">
            <div className="card-name">{login}</div>
            <div>{bio}</div>
          </div>
        </div>
      </>
    );
  }
}
