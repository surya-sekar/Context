import './App.css';
import Counter from './components/Counter'
import CounterContextProvider from './contexts/CounterContextProvider'
import ReducerCounter from './Reducer/reducerCounter'

function App() {
  return (
    <CounterContextProvider>
    <div className="App">
      <Counter />
      <ReducerCounter />
    </div>
    </CounterContextProvider>
  );
}

export default App;
