import "./App.css";
import Nav from "./Components/Nav.js";
import Footer from "./Components/Footer.js";
import { Routes, Route } from "react-router-dom";
import About from "./About.js";
import Home from "./Components/Home.js";
import BookingPage from "./Components/BookingPage.js";
import Main from "./Components/Main.js";
import ConfirmedBooking from "./Components/ConfirmedBooking.js";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/booking" element={<BookingPage />} />
          {/* <Route path="/main" element={<Main />} /> */}
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
