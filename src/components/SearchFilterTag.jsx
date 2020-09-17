import React, {useState, useEffect} from "react";

import "../assets/styles/components/SearchFilterTag.scss";

/* const SearchFilterTag = ({ title }) => {

  const [visible, setVisible] = useState(true)

  console.log(visible);

  const tag = () => (
    <li>
      <div className="filter__tag">
        <p>{title}</p>
        <span onClick={() => setVisible(false)}>x</span>
      </div>
    </li>
  )
  
  return (
    visible ? tag() : ''
  );
}; */

class SearchFilterTag extends React.Component {

  constructor(props) {
    super(props)
    this.textRef = React.createRef();
  }

  show = () => console.log(this.texRef);
  render() {
    
    return (
      
    <li ref={this.textRef}>
      <div className="filter__tag">
        <p id='Hola'>{this.props.title}</p>
        {this.show}
        <span onClick={() => this.props.onClick(this.props.title)} onClickCapture={() => this.props.onClickCapture(this.props.title)}>x</span>
      </div>
    </li>
    )
  }
}
export default SearchFilterTag;
