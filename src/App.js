import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql';
import GetEmployees from './components/GetEmployees';

function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
      <GetEmployees />
    </ApolloProvider>
  );
}

export default App;
