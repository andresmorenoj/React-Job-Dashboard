import React from "react";
import SearchFilterTag from "./SearchFilterTag";
import "../assets/styles/components/Navbar.scss";
class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.inputText = React.createRef();
    this.handleKeyUp = this.handleClearInput.bind(this);
    this.state = {
      tag: '',
    };
  }

  handleClearInput = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        tag: [...this.state.tag,
          this.inputText.current.value
        ]
      })
      this.inputText.current.value = "";
    }
  };

  handleDeleteTag = (e) => {
    let index = this.state.tag.filter((tag) => tag !== e);
    this.setState({
      tag: index,
    });
  };

  handleClearFilter = () => {
    this.setState({
      tag: [],
    });
  };

  render() {
    return (
      <nav className="header__navbar">
        <ul>
          <div className="navbar__tagFilter">
            {
              this.state.tag
                ? this.state.tag.map((tag) => (
                  <SearchFilterTag key={tag} title={tag} onClick={this.handleDeleteTag} onClickCapture={this.props.onClickCapture}/>
                ))
                : null
            }
            <li>
              <input
                className="header__navbar-input"
                onKeyDown={this.props.onChange}
                type="text"
                ref={this.inputText}
                placeholder="Text here..."
                onKeyUp={this.handleClearInput}
              />
            </li>
          </div>
          <li onClick={this.props.onClick} onClickCapture={this.handleClearFilter} className="header__navbar-clearButton">
            Clear
          </li>
        </ul>
      </nav>
    );
  }
}

export default SearchFilter;
