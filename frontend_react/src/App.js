import React from "react";

import {About, Footer, Header, Skills, Testimonials, Work} from './container';
import { NavigationBar } from "./components";
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;