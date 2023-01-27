import { useState } from 'react';
import './App.css';
import {data} from './components/Data';
import List from './components/List';

function App() {
  const [list] = useState(data);

  return <List list={list} />;
}

export default App;
