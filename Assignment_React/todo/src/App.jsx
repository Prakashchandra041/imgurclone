import './App.css';
import { Counter } from './component/Counter';
import { Todo } from "./component/Todo";
import { Route, Switch } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>home Page</h1>
        </Route>
        <Route  path="/todo">
          <Todo></Todo>
        </Route>
        
        <Route path="/counter">
          <Counter></Counter>
        </Route>

      
      </Switch>
      
    </div>
  );
}

export default App;
