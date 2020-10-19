import React, { useState } from "react";
import About from "./components/About";
// import Header from './components/Header';
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {window.location.pathname.includes("/contact") ? (
          <ContactForm></ContactForm>
        ) : window.location.pathname.includes("/projects") ? (
          <Projects />
        ) : window.location.pathname.includes("/resume") ? (
          <Resume />
        ) : (
          <>
            <About></About>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
