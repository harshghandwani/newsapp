import React, { Component } from 'react';
import NavBar from './components/Navbar';
import News from './components/News';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<News pageSize={6} country='in' category='general'/>} />
            <Route path="/sports" element={<News pageSize={6} country='in' category='sports'/>} />
            <Route path="/business" element={<News pageSize={6} country='in' category='business'/>} />
            <Route path="/technology" element={<News pageSize={6} country='in' category='technology'/>} />
            <Route path="/entertainment" element={<News pageSize={6} country='in' category='entertainment'/>} />  
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
