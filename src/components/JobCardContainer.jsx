import React, { useState } from "react";
import Filter from './SearchFilter';
import JobCard from './JobCard';
import dataInfo from "../data.json";
import "../assets/styles/components/JobCardContainer.scss";

const JobCardContainer = () => {

  const [data, setData] = useState([]);

  const handleClick = () => {
    setData(dataInfo);
  }

  return (
    <main className="container">
      <Filter/>
      {data.map((job) => {
            return <JobCard {...job} key={job.id} />;
          })}
          <button onClick={() => handleClick()}>Click</button>
    </main>
  );
};

export default JobCardContainer;
