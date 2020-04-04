import React from 'react';

import { TranslatorProvider } from "react-translate";

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
import translations from "./translations";
import Home from './pages/Home.js';
import About from './pages/About.js';
import Platforms from './pages/Platforms.js';
import UseCases from './pages/UseCases';
import GeoDataSets from './pages/GeoDataSets';
import './App.css';

function App() {

  const [languageMode, setLanguageMode] = React.useState(true);

  const handleLanguageToggle = () => {
    setLanguageMode(!languageMode);
  };

  return (
    <div className="App">

      <TranslatorProvider translations={translations}>
        <Router hashType={"noslash"}>
          <ScrollToTop>
            <div>
              <Switch>
                <Route path="/platforms">
                  <Platforms languageMode={languageMode}
                    handleLanguageToggle={handleLanguageToggle} />
                </Route>
                <Route path="/geodatasets">
                  <GeoDataSets languageMode={languageMode}
                    handleLanguageToggle={handleLanguageToggle} />
                </Route>
                <Route path="/usecases">
                  <UseCases languageMode={languageMode}
                    handleLanguageToggle={handleLanguageToggle} />
                </Route>
                <Route path="/about">
                  <About languageMode={languageMode}
                    handleLanguageToggle={handleLanguageToggle} />
                </Route>
                <Route path="/">
                  <Home languageMode={languageMode}
                    handleLanguageToggle={handleLanguageToggle} />
                </Route>
              </Switch>
            </div>
          </ScrollToTop>
        </Router>

      </TranslatorProvider>

    </div>
  );
}

export default App;
