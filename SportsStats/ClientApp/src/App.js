import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { NFL } from './components/NFL';

import './custom.css'
import { FetchData } from './components/FetchData';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/NFL' component={NFL} />
      </Layout>
    );
  }
}
