import React from "react";

import Button from "./button";

const IconText = (props) => {
  const className = ["brand-text-icon", props.className];

  return (
    <Button className={className.join(" ")} href="" type="link">
      {props.children}
    </Button>
  );
};

export default IconText;
