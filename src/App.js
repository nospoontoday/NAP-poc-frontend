import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql';
import Register from './components/Register';

function App() {
  return (
    <ApolloProvider client={client}>
      <main className="App">
        <Register />
      </main>
    </ApolloProvider>
  );
}

export default App;
