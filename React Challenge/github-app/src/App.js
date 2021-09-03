import React,{useState} from 'react';
import { BrowserRouter, Switch,Route,Redirect } from 'react-router-dom'
import axios from 'axios';
import './App.css';

// Imports all components
import List from './components/List';
import Detailed from './components/Detailed';

// Search by userName and get all users data
function Search() {
  const [userData, setuserData] = useState();
  const textInput = React.createRef()
 
  const searchTerm = async () =>{
    const url = `https://api.github.com/search/users?q=${textInput.current.value}`
    await axios.get(url)
    .then((users)=>{
      const allusers = users.data
      setuserData(allusers)
    });
  }
  
  // return the html data and set value to the tags
  return (
    <div className="App">
      <div className="App-header">
      <h1>GITHUB</h1>
      <input type="text" ref={textInput} placeholder="Enter Github UserName..."/>
      <button onClick={searchTerm}>Search</button>
      </div>
      <div className="user-container">
        <List users={userData} />  
      </div>
    </div>
  )
}


// set the routes to link with pages
function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Search}/>
      <Route path="/details" component={Detailed} />
      <Redirect to="/"/>
    </Switch>
    </BrowserRouter>
    </>    
  );
}

export default App;
