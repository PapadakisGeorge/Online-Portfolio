import React from "react";

import {About, Footer, Header, SkillsAndExperience, Projects} from './container';
import { NavigationBar } from "./components";
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <Header />
      <About />
      <Projects />
      <SkillsAndExperience />
      <Footer />
    </div>
  );
}

export default App;