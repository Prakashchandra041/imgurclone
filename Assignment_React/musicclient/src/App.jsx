import { Header } from './component/Header';
import './App.css';
import { FetchData } from './component/FetchData';
import { Counter } from './component/Counter';
import { Todo } from './component/Todo';
import { CondtionRederExample } from './component/ConditonRederExample';

function App() {
  return (
    <div className="App">
      {/* <Todo></Todo> */}
      {/* <Counter></Counter> */}
      {/* <Header></Header> */}
      {/* <FetchData></FetchData> */}
      <CondtionRederExample></CondtionRederExample>
    </div>
  );
}

export default App;
