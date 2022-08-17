import { useState } from 'react';
import './App.css';
import DateJour from './components/date-jour/date-jour';
import Horloge from './components/horloge/horloge';

function App() {

  const [changeDisplay, setChangeDisplay] = useState(true);


  return (
    <div className="App">

      <button onClick={() => setChangeDisplay(value => !value)} >Changer !</button>

      {changeDisplay ? (
        <DateJour />
      ) : (
        <Horloge />
      )}

    </div>
  );
}

export default App;
