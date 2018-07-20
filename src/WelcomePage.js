import React from 'react';
import './App.css'
import CreateForm from './CreateForm' 

class WelcomePage extends React.Component {
   render() {
      return (
         <div>
            <Header/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Welcome!</h1>
         </div>
      );
   }
}

export default WelcomePage;