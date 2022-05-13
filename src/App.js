import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsunscribeFromAuth = null;

  // MOUNTING
  componentDidMount() {
    this.unsunscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  // UNMOUNT
  componentWillUnmount() {
    this.unsunscribeFromAuth();
  }

  // RENDER
  render() {
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/signin" element={<SignInSignUp />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
