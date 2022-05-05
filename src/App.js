import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql';
import Register from './components/users/Register';
import GetEmployees from './components/GetEmployees';
import Login from './components/users/Login';

function App() {
  return (
    <ApolloProvider client={client}>
      <main className="App">
        {/* <Register /> */}
        <Login />
        {/* <GetEmployees /> */}
      </main>
    </ApolloProvider>
  );
}

export default App;
