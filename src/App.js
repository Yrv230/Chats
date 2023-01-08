import React, { useState } from 'react';
import FirstChat from './components/Chat/FirstChat';
import SecondChat from './components/Chat/SecondChat';


function App() {
  const [massages, setMassages] = useState([]);

  return (
    <div className="App">
      <FirstChat
        massages={massages}
        setMassages={setMassages}
      />
      <SecondChat
        massages={massages}
        setMassages={setMassages}
      />
    </div>
  );
}

export default App;
