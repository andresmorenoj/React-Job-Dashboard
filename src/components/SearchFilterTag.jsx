import React from "react";

import "../assets/styles/components/SearchFilterTag.scss";
class SearchFilterTag extends React.Component {

  constructor(props) {
    super(props)
    this.textRef = React.createRef();
  }
  render() {
    return (
      <li ref={this.textRef}>
        <div className="filter__tag">
          <p id='Hola'>{this.props.title}</p>
          <span onClick={() => this.props.onClick(this.props.title)} onClickCapture={() => this.props.onClickCapture(this.props.title)}>x</span>
        </div>
      </li>
    )
  }
}
export default SearchFilterTag;
