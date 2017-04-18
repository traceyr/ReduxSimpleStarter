//Gets react from installed modules
import React from 'react'; //create and manage components
import ReactDOM from 'react-dom'; //interacts with DOM

//Create new component. This compment will produce HTML
const App = () => {
  return <div>Hi!</div>; //jsx looks like html but is js
};
//jsx can not be interpreted by browser(webpack/babel compiles it into vanilla js)
//write jsx to produce HTML that gets inserted when rendered

//put into DOM components generated HTML
ReactDOM.render(<App />, document.querySelector('.container')); //inside tag creates instance of app, instead of a component class
//second argument references where to put it on the DOM

//ONE COMPONENT PER FILE!!!
