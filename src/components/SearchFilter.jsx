import React from "react";
import SearchFilterTag from "./SearchFilterTag";
import "../assets/styles/components/Navbar.scss";

/* class SearchFilterTest extends React.Component {
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
} */

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
      /*       const newTag = (
        <li key={this.inputText.current.value}>
          <div className="filter__tag">
            <p>{this.inputText.current.value}</p>
            <span>x</span>
          </div>
        </li>
      ); */
      /* this.setState({
        tag: [
          ...this.state.tag,
          <SearchFilterTag key={this.inputText.current.value} title={this.inputText.current.value} onClick={this.handleDeleteTag} />,
        ],
      }); */
      this.setState({
        tag: [...this.state.tag,
          this.inputText.current.value
        ]
      })
      console.log(this.state.tag);
      this.inputText.current.value = "";
    }
  };

  handleDeleteTag = (e) => {
    console.log("click tag");
    let index = this.state.tag.filter((tag) => tag !== e);
    this.setState({
      tag: index,
    });
   /*  const index = this.state.tag.indexOf(e)
    if(index > -1) {
      this.setState({
        tag: [
          this.state.tag.splice(index, 1)
        ]
      })
      
     */
    console.log("Esto es e: ", e);
    console.log("Esto es index: ", index);
    console.log("Esto es state: ", this.state.tag);
    //console.log(this.state.tag.key);
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
                  <SearchFilterTag key={tag} title={tag} onClick={this.handleDeleteTag} />
                ))
                : null
            }

            <li>
              {/* <input
                className="header__navbar-input"
                ref={this.inputText}
                onKeyUp={(e) => this.handleKeyUp(e)}
  
                type="text"
                placeholder="Text here..."
              /> */}

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
