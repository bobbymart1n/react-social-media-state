import React from "react";

class NavSearch extends React.Component{
  constructor(props) {
    super(props);
    this.handleFilterText = this.handleFilterText.bind(this);
  }
  handleFilterText(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          value={this.props.filterText}
          onChange={this.handleFilterText} />
        <button>Search</button>
      </div>
    );
  }
}

export default NavSearch;
