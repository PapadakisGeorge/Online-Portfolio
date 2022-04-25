import React from "react";

import {About, Footer, Header, Skills, WorkExperience, Projects} from './container';
import { NavigationBar } from "./components";
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <WorkExperience />
      <Footer />
    </div>
  );
}

export default App;