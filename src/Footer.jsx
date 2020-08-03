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
                    <li><Icon size={40} icon={linkedinSquare} /></li>
                    <li><Icon size={40} icon={googlePlusSquare} /></li>
                    <li><Icon size={40} icon={githubSquare} /></li>
                </ul>
                   
                </div>
            </div>
        </div>
        </div>
    </>);
}

export default Footer;