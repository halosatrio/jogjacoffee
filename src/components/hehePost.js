import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../store/actions";
import { coffees } from "../services/coffee";

export class Post extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // calling the new action creator
    this.props.getData(coffees);
  }
  render() {
    return (
      <ul>
        {this.props.articles.map((el, index) => (
          <li key={index}>{el.name}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10),
  };
}

export default connect(mapStateToProps, { getData })(Post);
