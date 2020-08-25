import React, { Component } from "react";
import { connect } from "react-redux";

import { addArticle } from "../store/actions";

class HeheForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    this.props.addArticle({ title });
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button className="btn btn-info mt-2" type="submit">
          SAVE
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => dispatch(addArticle(article)),
  };
};

const Form = connect(null, mapDispatchToProps)(HeheForm);

export default Form;
