import React from "react";

import { connect } from "react-redux";

const Contoh = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map((el, index) => (
          <li key={index}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

const List = connect(mapStateToProps)(Contoh);

export default List;
