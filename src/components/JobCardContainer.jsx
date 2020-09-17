import React from "react";
import Filter from './SearchFilter';
import JobCard from './JobCard';
import dataInfo from "../data.json";
import "../assets/styles/components/JobCardContainer.scss";
class JobCardContainer extends React.Component {

 state = {
   data: dataInfo,
   test: []
 }

 handleFilter = e => {
    if(e.keyCode === 13) {
      const text = e.target.value
      const newSearch = dataInfo.filter(value => (value.role.toLowerCase() === e.target.value.toLowerCase() || value.level.toLowerCase() === e.target.value.toLowerCase() || value.position.toLowerCase() === e.target.value.toLowerCase()))

      this.setState({
        data: newSearch,
        test: [...this.state.test, text], 
      })
    }
  }

  handleClear = () => {
    this.setState({
      data: dataInfo,
      test: []
    });
  }

  handleDeleteTag = e => {
    const newFilterData = dataInfo.filter(tag => {
      const deleteTag = this.state.test.filter(tag => tag !== e)
      console.log('Delete tag 1: ', deleteTag );
      this.setState({
        test: deleteTag
      })

      if(tag.role === e) {
        console.log('Delete tag 2: ', deleteTag );
        if(!this.state.test) {
          return this.setState({
            data: dataInfo
          })
        }
        return dataInfo.filter(tag => tag.role !== e)
      }

      if(tag.level === e) {
        console.log('Delete tag 2: ', deleteTag );
        if(!this.state.test) {
          return this.setState({
            data: dataInfo
          })
        }
        return dataInfo.filter(tag => tag.level !== e)
      }

      if(tag.position === e) {
        console.log('Delete tag 2: ', deleteTag );
        if(!this.state.test) {
          return this.setState({
            data: dataInfo
          })
        }
        return dataInfo.filter(tag => tag.position !== e)
      }
    })

    this.setState({
      data: newFilterData
    })
  }

  render() {
    return (
      <main className="container">
        <Filter onChange={this.handleFilter} onClick={this.handleClear} onClickCapture={this.handleDeleteTag}/>
        {
          this.state.data
            ? this.state.data.map((job) => {
              return <JobCard {...job} key={job.id} />;
            })
            : null
        }
      </main>
    );
  }
};

export default JobCardContainer;
