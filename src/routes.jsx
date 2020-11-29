import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import About from './Pages/About'
import Resname from './Pages/Resname'
import Contact from './Pages/Contact.js'
import Blog from './Pages/Blog.js'

import Workes from './Pages/Workes/Workes'
const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/resname", name: "Resname", Component: Resname },
  { path: "/workes", name: "Workes", Component: Workes },
  { path: "/blog", name: "Blog", Component: Blog },
  { path: "/contact", name: "Contact", Component: Contact },


];

const Routes = () => {
  const onEnter = node => {
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6
        }
      }
    );
  };

  const onExit = node => {
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2
        }
      }
    );
  };

  return (
      <BrowserRouter>
        <Navbar />
      
        <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames='page'
                onExit={onExit}
                onEntering={onEnter}
                unmountOnExit>
                <div className='page'>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        </Switch>
   
      </BrowserRouter>
  );
};

export default Routes;
