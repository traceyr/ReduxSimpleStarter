//creates search bar that updates video list
import React, { Component } from 'react';
//functional component
// const SearchBar = () => {
//   return <input />;
// }
//class component-needs to be aware so use this
class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value) }/>;
  }
}

export default SearchBar;
