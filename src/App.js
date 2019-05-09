import React from 'react';
import './App.css';
import NavBar from './NavBar'
const arr = [{titel: "Home"}, {titel: "Services",
sousitems:["For enterpreneurs", "For students", "For hobbyists"]},
 {titel: "Contact"}]
function App() {
  return (
    <div className="App">
      <NavBar navItem = {arr} />
    </div>
  );
}

export default App;
