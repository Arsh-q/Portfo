import React from 'react';
import styled from 'styled-components';
import clock from './Images/JSclock 1.png';

const Portfolio = (props) => {
    return(<>

    <div className="container">
        <PortfolioDiv id="portfolio">
        <div className="row align-items-center text-center text-lg left">
        <div className="col-lg-6 p-lg-0">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div style={{backgroundColor:`${props.color}`}} className="flip-card-front">
                            <img src={props.imgsrc}/>
                        </div>
                        <div style={{backgroundColor:`${props.color}`}} className="flip-card-back">
                            <h1>{props.name}</h1>
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-5 mx-auto py-3">
            <div className='description'>
                <h1 className='my-3'>{props.name} <span style={{backgroundColor:`${props.color}`}}> 2020</span></h1>
                <p className='my-4'>{props.desc} </p>
             <a href={props.link} style={{borderRadius:'50px',fontSize:'1rem'}} className='btn btn-lg btn-outline-primary'>Visit Project</a>

            </div>
            </div>
            </div>
        </PortfolioDiv>
        </div>
        <div className="line"></div>
    </>);
}

export default Portfolio;

const PortfolioDiv = styled.div`
    min-height: 80vh;
    padding: 4rem;
    .flip-card-front img{
    width:400px;
    z-index:-2;
    border-radius:30px 30px;
}

    .flip-card{
    position: relative;
    border: 1px solid #fff;
    border-radius: 30px;
    perspective: 1000px;
    width:400px;
    height: 400px;
    
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner{
    transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}
.flip-card-front{
    color: black;
    border-radius: 30px;

}
.flip-card-back{
    
    color: black;
    display:flex;
    border-radius: 30px;

    justify-content: center;
    align-items:center;
    flex-direction:column;
    transform: rotateY(180deg);
}
.description p {
    font-size: 1.2rem;
    color:grey;
}
.description span{
    font-size: 0.8rem;
    color: white;
    border-radius: 6px;
    padding: 2px 5px;
}
`;
