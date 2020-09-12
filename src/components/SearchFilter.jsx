import React from "react";
import SearchFilterTag from "./SearchFilterTag";
import "../assets/styles/components/Navbar.scss";

class SearchFilterTest extends React.Component {
  constructor(props) {
    super(props);
    this.inputText = React.createRef();
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.state = {
      tag: [],
    };
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      const newTag = (
        <li key={this.inputText.current.value}>
          <div className="filter__tag">
            <p>{this.inputText.current.value}</p>
            <span>x</span>
          </div>
        </li>
      );
      this.setState({
        tag: [...this.state.tag, newTag],
      });
      this.inputText.current.value = "";
    }
  }

  handleClear() {
    this.setState({
      tag: [],
    });
  }

  render() {
    return (
      <nav className="header__navbar">
        <ul>
          <div className="navbar__tagFilter">
            {this.state.tag}

            <li>
              <input
                className="header__navbar-input"
                ref={this.inputText}
                onKeyUp={(e) => this.handleKeyUp(e)}
                type="text"
                placeholder="Text here..."
              />
            </li>
          </div>
          <li onClick={this.handleClear} className="header__navbar-clearButton">
            Clear
          </li>
        </ul>
      </nav>
    );
  }
}

export default SearchFilterTest;
