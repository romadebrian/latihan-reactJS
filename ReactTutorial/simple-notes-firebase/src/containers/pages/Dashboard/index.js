import React, { Component } from "react";
import { connect } from "react-redux";
import { addDataAPI } from "../../../config/redux/action";
import "./Dashboard.scss";

class Dashboard extends Component {
  state = {
    title: "",
    content: "",
    date: "",
  };

  handleSaveNotes = () => {
    const { title, content } = this.state;
    const { saveNotes } = this.props;

    const data = {
      title: title,
      content: content,
      data: new Date(),
    };
    saveNotes(data);
    console.log(data);
  };

  onInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  };

  render() {
    const { title, content, date } = this.state;
    return (
      <div className="container">
        <div className="input-form">
          <input
            placeholder="title"
            className="input-title"
            value={title}
            onChange={(e) => this.onInputChange(e, "title")}
          />
          <textarea
            placeholder="content"
            className="input-content"
            value={content}
            onChange={(e) => this.onInputChange(e, "content")}
          ></textarea>
          <button className="save-btn" onClick={this.handleSaveNotes}>
            simpan
          </button>
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

const reduxDispatch = (dispatch) => ({
  saveNotes: () => dispatch(addDataAPI()),
});

export default connect(null, reduxDispatch)(Dashboard);
