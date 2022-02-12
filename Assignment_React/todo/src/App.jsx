import './App.css';
import { Counter } from './component/Counter';
import { Todo } from "./component/Todo";
import { Route, Switch } from "react-router-dom"
import { Counter3 } from './component/Conter3';
import { Todo2 } from './component/Todo2';
import { UseEffectApi } from './component/useeffectapi/useeffectapi';
import { Cleanupfun, cleanupfun } from './component/useeffectClearnup/clearupfunctionuseeffect';
import { Prakash } from './component/useeffectClearnup/Prakash';
import { Reduxcounter } from './component/reduxcounter';
import { Amolchess } from './component/Chess/AmolChess';
function App() {
  return (
    <div className="App">
      {/* <Cleanupfun></Cleanupfun> */}
      {/* <Prakash></Prakash> */}
      {/* <UseEffectApi></UseEffectApi> */}
      {/* <Amolchess></Amolchess> */}
      <Reduxcounter></Reduxcounter>
      {/* <Switch>
        <Route exact path="/">
          <h1>home Page</h1>
        </Route>
        <Route exact path="/todo">
          <Todo></Todo>
        </Route>
        
        <Route path="/counter">
          <Counter></Counter>
        </Route>
        
        <Route path="/counter3">
         <Counter3></Counter3>
        </Route>

        <Route exact path="/Todo2">
          <Todo2></Todo2>
        </Route>
        
      </Switch> */}
      
    </div>
  );
}

export default App;
