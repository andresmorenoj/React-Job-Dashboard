import React, { useState } from "react";
import Filter from './SearchFilter';
import JobCard from './JobCard';
import dataInfo from "../data.json";
import "../assets/styles/components/JobCardContainer.scss";

/* function JobCardContainer() {

  const [data, setData] = useState([]);
  const [test, setTest] = useState('');

  const handleTest = e => {
    setTest(e.target.value)
  }

  const handleClick = () => {
    setData(dataInfo);
  }

  return (
    <main className="container">
      <Filter onchange={() => handleTest(e)}/>
      {data.map((job) => {
            return <JobCard {...job} key={job.id} />;
          })}
          <button onClick={() => handleClick()}>Click</button>
    </main>
  );
}; */
class JobCardContainer extends React.Component {

 state = {
   data: [],
   test: ''
 }

  handleTest = e => {
    this.setState({
      test: e.target.value
    })

    console.log(this.state.test);
  }

  handleClick = () => {
    this.setState({
      data: dataInfo,
      test: 'Hola'
    });
  }

  render() {
    return (
      <main className="container">
        <Filter onChange={this.handleTest}/>
        {this.state.data.map((job) => {
              return <JobCard {...job} key={job.id} />;
            })}
        <button onClick={this.handleClick}>Click</button>
      </main>
    );
  }

  
};

export default JobCardContainer;
