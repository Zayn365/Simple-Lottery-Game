import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <h1>!!!Lottery Game!!!</h1>
     <Lottery />
     <Lottery title="Mini Daily" maxNum="10" maxBalls="4" />
    </div>
  );
}

export default App;
