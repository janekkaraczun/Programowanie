import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout fixedHeader>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}}
         to="/My-resume">Home</Link>} scroll>
            <Navigation style={{display:'flex'}}>
                <Link to="/My-resume/resume">Resume</Link >
                {/*  <Link to="/aboutme">O mnie</Link >  */}
                <Link to="/My-resume/projects">Skills</Link >
                <Link to="/My-resume/contact">Contact</Link >
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link to="/My-resume/resume">Resume</Link >
                  {/*  <Link to="/aboutme">O mnie</Link >  */}
                <Link to="/My-resume/projects">Skills</Link >
                <Link to="/My-resume/contact">Contact</Link >
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
