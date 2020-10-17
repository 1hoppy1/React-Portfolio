import React from 'react';
//import './App.css';
import About from './components/About';
// import Footer from './components/Footer';
// import Header from './components/Header';
import Navigation from './components/Navigation';
// import Projects from './components/Projects';


function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;

/* <Header></Header>
        <Footer></Footer>
        <Projects></Projects> */