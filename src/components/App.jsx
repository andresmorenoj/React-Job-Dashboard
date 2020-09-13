import React, { useState } from "react";
import Layout from "./Layout";
import JobCardContainer from "./JobCardContainer";
import JobCard from "./JobCard";
import dataInfo from "../data.json";

function App() {
  /* const [data, setData] = useState([]);

  function handleClick() {
    setData(dataInfo);
  } */
  return (
    <React.Fragment>
      <Layout>
        {/* <JobCardContainer>
          {data.map((job) => {
            return <JobCard {...job} key={job.id} />;
          })}
          <button onClick={handleClick}>Click</button>
        </JobCardContainer> */}
        <JobCardContainer/>
      </Layout>
    </React.Fragment>
  );
}

export default App;
