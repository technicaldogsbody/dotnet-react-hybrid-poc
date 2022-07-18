import react from 'react';
import reactDom from 'react-dom';
import reactDomServer from 'react-dom/server';
import * as components from "./Components";
import homePage from "./Page/HomePage";


global.React = react;
global.ReactDOM = reactDom;
global.ReactDOMServer = reactDomServer;

global.Header = components.Header;
global.Hero = components.Hero;
global.Intro = components.Intro;
global.Freetext = components.Freetext;

global.HomePage = homePage;