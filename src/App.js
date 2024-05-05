import './App.css';
import Header from './Header'; // Import the Header component
import Nav from './Nav'; // Import the Nav component
import Main from './Main'; // Import the Main component
import Footer from './Footer'; // Import the Footer component

function App() {
  return (

    <div className="App">
      <Header /> {/* Replace <header> tag with <Header /> component */}
      <Nav /> {/* Replace <nav> tag with <Nav /> component */}
      <Main /> {/* Replace <main> tag with <Main /> component */}
      <Footer /> {/* Replace <footer> tag with <Footer /> component */}
    </div>
  );
}

export default App;
