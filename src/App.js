import React from "react";
import ConversationsList from "./components/ConversationsList";
import MessageLogs from "./components/MessageLogs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  const { cableApp } = props;
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <ConversationsList {...props} cableApp={cableApp} />
          )}
        />
        <Route
          exact
          path="/logs"
          render={(props) => <MessageLogs {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
