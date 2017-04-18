//Create new component. This compment will produce HTML
const App = function(){
  return <div>Hi!</div>; //jsx looks like html but is js
};
//jsx can not be interpreted by browser(webpack/babel compiles it into vanilla js)
//write jsx to produce HTML that gets inserted when rendered

//put into DOM components generated HTML
React.render(App); //React not defined error in browser
