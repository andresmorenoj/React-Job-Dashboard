import React from "react";
import Header from "./Header";
import SearchFilter from "./SearchFilter";

const Layout = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Header />
     {/*  <SearchFilter /> */}
      {children}
    </React.Fragment>
  );
};

export default Layout;
