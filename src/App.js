import * as React from 'react';
import data from './Data';

import NavList from './components/NavList';
import DisplayPage from './components/DisplayPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    } 
  }
  
  render(){
    return(
      <div className="App">
        
        <DisplayPage/>
        <NavList/>
        
      </div>
    );
  }    
}
export default App;
