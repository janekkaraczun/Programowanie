import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


  const Main = () => (
    <Switch>
      <Route exact path="/My-resume" component={LandingPage}/>
      {/* <Route path="/aboutme" component={About} /> */}
      <Route path="/My-resume/contact" component={Contact} />
      <Route path="/My-resume/projects" component={Projects} />
      <Route path="/My-resume/resume" component={Resume} />

    </Switch>
)

export default Main;
