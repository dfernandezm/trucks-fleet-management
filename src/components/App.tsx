import React from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import '../components/Truck/TruckForm';
import TruckForm from '../components/Truck/TruckForm';
import {ApolloProvider, withApollo} from "react-apollo";
import {ApolloClient} from 'apollo-client';

//https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76
//https://github.com/palmerhq/tsdx
const App: React.FC<{}> = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      withApollo(<TruckForm />)
    </div>
  );
}

export default withApollo(App);
