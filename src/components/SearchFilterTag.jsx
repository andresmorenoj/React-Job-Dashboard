import React, {useState, useEffect} from "react";

import "../assets/styles/components/SearchFilterTag.scss";

const SearchFilterTag = ({ title }) => {

  const [visible, setVisible] = useState(true)

  console.log(visible);

/*   const tagRed = React.createRef(); */

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
};
export default SearchFilterTag;
