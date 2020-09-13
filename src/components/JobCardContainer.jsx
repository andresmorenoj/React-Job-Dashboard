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
   data: dataInfo,
   test: []
 }

 handleFilter = e => {
    if(e.keyCode === 13) {
      const text = e.target.value
      const newSearch = dataInfo.filter(value => (value.role === e.target.value && value.level === e.target.value) || (value.role === e.target.value || value.level === e.target.value))
      /* const newSeatch2 = [
        ...newSearch, dataInfo.filter(value =>value.level === e.target.value)
      ]  */
      this.setState({
        data: newSearch,
        test: [...this.state.test, text], 
      })

      console.log(newSearch);
    }
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
        <Filter onChange={this.handleFilter}/>
        {this.state.data.map((job) => {
              return <JobCard {...job} key={job.id} />;
            })}
       {/*  <button onClick={this.handleClick}>Click</button> */}
      </main>
    );
  }

  
};

export default JobCardContainer;
