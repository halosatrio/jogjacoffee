import React from "react";

const TitleText = (props) => {
  const className = [props.className];

  return (
    <div className="text-center">
      <h1 className={`title-text ${className.join(" ")}`}>{props.children}</h1>
    </div>
  );
};

export default TitleText;
