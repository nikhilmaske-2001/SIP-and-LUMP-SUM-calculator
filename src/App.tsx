import React from 'react';
import './App.css';
import { useStyles } from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      Hello
    </div>
  );
}

export default App;
