import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/bodyComponents/Body";
import Footer from "./components/Footer";
import Header from "./components/headerComponents/Header";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
