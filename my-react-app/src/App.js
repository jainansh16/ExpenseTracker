import React, { useEffect, useState } from 'react';

function App() {
  const [pythonMessage, setPythonMessage] = useState('');
  const [nodeMessage, setNodeMessage] = useState('');

  useEffect(() => {
    // Call Python backend
    fetch('/api/python')
      .then(res => res.json())
      .then(data => setPythonMessage(data.message));

    // Call Node.js backend
    fetch('/api/node')
      .then(res => res.json())
      .then(data => setNodeMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>React Frontend</h1>
      <p>{pythonMessage}</p>
      <p>{nodeMessage}</p>
    </div>
  );
}

export default App;
