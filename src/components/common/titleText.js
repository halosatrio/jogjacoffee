import React from "react";

const TitleText = (props) => {
  const className = [props.className];
  if (props.isBold) className.push("font-weight-bold");

  return (
    <div className="container text-center">
      <h1 className={className.join(" ")} style={{ marginBottom: 60 }}>
        {props.children}
      </h1>
    </div>
  );
};

export default TitleText;
