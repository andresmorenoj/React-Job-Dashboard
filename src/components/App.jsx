import React from "react";
import Layout from "./Layout";
import JobCardContainer from "./JobCardContainer";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <JobCardContainer/>
      </Layout>
    </React.Fragment>
  );
}

export default App;
