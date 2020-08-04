import React from 'react';
import styled from 'styled-components';
const Home = () => {
    return (<>
        <Header id="home">
        <div className="container">
            <h1>Hi I am <span>ARSH QUAYUM</span></h1>
            <br />
            <p>Creative and self-starting Front-End Developer</p>
            <button className='btn btn-outline-danger'>Get Started</button>
            </div>
      </Header>
    </>);
}

export default Home;

    const Header = styled.div`
    background: url('https://cdn2.hubspot.net/hubfs/202339/canvas/images/parallax/Website-Design-Background.png')
                no-repeat center center/cover;
    min-height: 92vh;
    `;
