import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import styled from 'styled-components';
import clock from './Images/JSclock 1.png';
import gallery from './Images/FlexGallery.png';
import yelp from './Images/Yelp.png';
import player from './Images/VideoPlayer.png';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';
const App = () => {
  return (<>
        <Navbar />
        <Home />
        <H1>Portfolio</H1>
        <Portfolio color='dodgerblue' imgsrc={clock} name='JS Clock' text='Pure HTML, CSS and Javascript' desc='A simple analog clock which works in real-time. ' />
        <Portfolio color='#28a745' imgsrc={gallery} name='Flex Gallery' text='Pure HTML, CSS' desc='A responsive flex gallery with pure CSS.' />
        <Portfolio color='#ffc107' imgsrc={yelp} name='YelpCamp' text='Bootstrap with Nodejs' desc='A BackEnd project using Nodejs and MongoDB. ' />
        <Portfolio color='#dc3545' imgsrc={player} name='CSS Video Player' text='HTML, CSS and Javascript' desc='A video player with custom controls' />
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