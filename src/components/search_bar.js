//creates search bar that updates video list
import React, { Component } from 'react';
//functional component
// const SearchBar = () => {
//   return <input />;
// }
//class component-needs to be aware so use this
class SearchBar extends Component {
constructor(props) {
  super(props);

  this.state = { term: ''};
}

  render() {
    return <input onChange={event => console.log(event.target.value) }/>;
  }
}

export default SearchBar;

//state is a plain js object used to record and react to user events. Each class based component we define has its own state. Need to initialize state
