import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import styled from 'styled-components';
import clock from './Images/JSclock 1.png';
import weather from './Images/weather.png';
import yelp from './Images/Yelp.png';
import player from './Images/VideoPlayer.png';
import Portfolio from './Portfolio';
import Services from './Services';
import TicTac from './Images/tictac.png';
import Contact from './Contact';
const App = () => {
  return (<>
        <Navbar />
        <Home />
        <H1>Portfolio</H1>
        <Portfolio link='https://5f3171f3500fded1a9a38906--zealous-babbage-8ca709.netlify.app/' color='dodgerblue' 
        imgsrc={TicTac} 
        name='Tic Tac Toe Game' 
        text='Pure HTML, CSS and Javascript' 
        desc='A simple tic tac toe game with reactjs. ' />
        <Portfolio link='https://arsh-q.github.io/Projects/clock/clock.html'
        color='#28a745' 
        imgsrc={clock} 
        name='JS Clock' 
        text='Pure HTML, CSS and some Jacasvript'  
        desc='A simple analog clock which works in realtime. ' />
        <Portfolio link='https://5f2a7b72734147876c550d93--reverent-chandrasekhar-b7ea81.netlify.app/'
        color='#dc3545' 
        imgsrc={weather} 
        name='Weather App' 
        text='HTML, CSS and Reactjs' 
        desc='A temperature app fetching data from weather api.' />
        <Portfolio link='https://safe-springs-35331.herokuapp.com/'
        color='#ffc107' 
        imgsrc={yelp} 
        name='YelpCamp' 
        text='Bootstrap with Nodejs' 
        desc='A BackEnd project using Nodejs and MongoDB. ' />
        <Services />
        <Contact />
        <Footer />
       </>);
}
export default App;
const H1 = styled.h1`
    text-align: center;
    padding: 4rem 0;
    color: lightslategray;
  padding-bottom:0;
    font-family: Comfortaa;
    `;
