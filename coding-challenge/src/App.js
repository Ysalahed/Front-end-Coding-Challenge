import React from 'react';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsList from './Components/CardsList';

function App() {
  return (
    <div>
        <h1 className="page-title">
          The list the most starred Github repos 
        </h1>
        <CardsList/>
    </div>
  );
}

export default App;
