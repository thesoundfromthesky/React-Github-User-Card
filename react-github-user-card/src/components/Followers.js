import React, { Component } from "react";
import Follower from "./Follower";

export default class Followers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { followers } = this.props;
    return (
      <>
        <h2>Followers</h2>
        <hr />
        {followers.map(follower => (
          <Follower key={follower.id} follower={follower} />
        ))}
      </>
    );
  }
}
