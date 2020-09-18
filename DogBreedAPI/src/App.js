import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Content from './Content';
import DogBreed from './DogBreed';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>         {/* <Switch>  switch will only render one component and then stop */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/content" exact component={Content} />
          <Route path="/content/:breedName" component={DogBreed} />
        </Switch>
      </div>
    </Router>
    // <Router>
    //   <div className="App">
    //     <Content />
    //   </div>
    // </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>
        Home Page
    </h1>
    </div>
  );
}

export default App;
