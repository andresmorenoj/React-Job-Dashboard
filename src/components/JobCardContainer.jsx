import React from "react";

import "../assets/styles/components/JobCardContainer.scss";

const JobCardContainer = (props) => {
  const { children } = props;

  return <main className="container">{children}</main>;
};

export default JobCardContainer;
