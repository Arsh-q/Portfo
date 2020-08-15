import React from 'react';
import { Icon } from 'react-icons-kit';
import {githubSquare} from 'react-icons-kit/fa/githubSquare';
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare';
import {googlePlusSquare} from 'react-icons-kit/fa/googlePlusSquare';
const Footer = () => {
    return(<>
        <div id='footer'>
        <div className="container ">
            <div className="row">
                <div className="col-md-5 mx-auto">
                
                <ul>
                    <li><a href="https://www.linkedin.com/in/arsh-quayum-499208191/"><Icon size={40} icon={linkedinSquare} /></a></li>
                    <li><Icon size={40} icon={googlePlusSquare} /></li>
                    <li><a href="https://github.com/Arsh-q/webdevcamp"><Icon size={40} icon={githubSquare} /></a></li>
                </ul>
                   
                </div>
            </div>
        </div>
        </div>
    </>);
}

export default Footer;
