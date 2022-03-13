import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const DATA = [
  { id: "todo-0", name: "Case1", info: "Person cannot pay utility bill", sold: true },
  { id: "todo-1", name: "Case2", info: "Person got injured at work", sold: false },
  { id: "todo-2", name: "Case3", info: "Person got lead poisoning from water pipes", sold: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
