import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { loader } from 'graphql.macro';
import logo from './logo.svg';
import './App.css';

const query = loader('./graphql/query.graphql');

class App extends Component {
  render() {
    const { data: { todos = [] } } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        todos:
        <pre>
          {JSON.stringify(todos, null, 2)}
        </pre>

        Data from: <a href="https://github.com/evenchange4/todomvc-subscriptions">todomvc-subscriptions</a>
      </div>
    );
  }
}

export default graphql(query)(App);
