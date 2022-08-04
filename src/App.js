import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from "./navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Create from "./Create"
import BlogDetails from './BlogDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
          <Route exact path="/" element={ <Home/> }>
          </Route>
          <Route path="/create" element={ <Create/> }>
          </Route>
          <Route path="/blogs/:id" element={ <BlogDetails/> }>
          </Route>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;