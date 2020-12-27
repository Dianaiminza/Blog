import React from 'react'
import Portfolio from './Portfolio';

import Contact from './Contact';

import Blog from './Blog';
import{Switch,Route}from 'react-router-dom';
 const Main = () => {
    return (
        <Switch>
          <Route exact path="/"component={Portfolio}/> 
          <Route  path="/Blog"component={Blog}/> 
          <Route  path="/Contact"component={Contact}/>  
          
        
        </Switch>
    )
}
export default Main;