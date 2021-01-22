import './App.css';
import Nav from './component/Nav/Nav'
import AboutMeCard from "./component/AboutMeCard/AboutMeCard"
// import Wrapper from "./component/Wrapper/Wrapper"
import ContactInfoCard from './component/ContactInfoCard/ContactInfoCard';
import Footer from './component/Footer/Footer';
import MajorProjectCard from './component/MajorProjectCard/MajorProjectCard'
import MiniProjectCard from "./component/MiniProjectCard/MiniProjectCard"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (

    <Router>

      <Nav />
    
      <Switch>

        <Route exact path="/" render={() => {return <Redirect to="/aboutme" />}} />

        <Route path="/aboutme">
          <AboutMeCard /> 
          <ContactInfoCard /> 
        </Route>

        <Route path="/portfolio">
          <MajorProjectCard />
          <MiniProjectCard />
        </Route>

      </Switch>

      <Footer />

    </Router>
    
    
  );
}

export default App;
