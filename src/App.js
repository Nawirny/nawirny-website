import React from 'react';

import { TranslatorProvider } from "react-translate";

import translations from "./translations";

import Home from './pages/Home.js';
import './App.css';

function App() {

  const [languageMode, setLanguageMode] = React.useState(true);

  const handleLanguageToggle = () => {
    setLanguageMode(!languageMode);
  };

  return (
    <div className="App">

      <TranslatorProvider translations={translations}>

        <Home languageMode={languageMode}
          handleLanguageToggle={handleLanguageToggle} />
      </TranslatorProvider>
      
    </div>
  );
}

export default App;
