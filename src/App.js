import Navbar from"./components/navBar";
import Intro from"./components/Intro/Intro";
import Services from"./components/Intro/Services/Services";

import "./App.css";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (

    <div className="App">
   <Navbar/>
   <Intro/>
   <Services/>
   <Contact/>
   <Footer/>
    </div>

  );
}

export default App;
