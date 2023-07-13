import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import RouterRoot from "./RouterRoot";
import { ApolloProvider } from "@apollo/client";
import { client } from "./Graphql/client";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary app-navbar">
          <Navbar.Brand href="/">Top Git projects</Navbar.Brand>
        </Navbar>
      </div>
      <RouterRoot />
    </ApolloProvider>
  );
}

export default App;
