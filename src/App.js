import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Ourwriters from "./pages/Ourwriters/Ourwriters";
import Retails from "./pages/Retails/Retails";
import PeoplePreview from "./pages/PeoplePreviews/PeoplePreview";
import Contact from "./pages/Contact/Contact";
import BookStore from "./pages/BookStore/BookStore";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div style={{ height: "10vh" }} />
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/About" component={About} />
          <Route exact path="/كت-اب-الدار" component={Ourwriters} />
          <Route exact path="/منافذ-التوزيع" component={Retails} />
          <Route exact path="/قالوا-عنا" component={PeoplePreview} />
          <Route exact path="/الاتصال" component={Contact} />
          <Route exact path="/متجر-الكتب" component={BookStore} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
