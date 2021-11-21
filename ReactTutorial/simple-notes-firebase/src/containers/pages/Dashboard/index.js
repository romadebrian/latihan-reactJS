import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="input-form">
          <input placeholder="title" className="input-title" />
          <textarea placeholder="content" className="input-content"></textarea>
          <button className="save-btn">simpan</button>
        </div>
        <hr />
        <div className="card-content">
          <p className="title">Title</p>
          <p className="data">21 Sep 2021</p>
          <p className="content">Content Notes</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
