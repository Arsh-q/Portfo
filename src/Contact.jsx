import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return(<>
        <div id='contact' style={{minHeight:'75vh'}}>
            <div className="container">
            <div className="row">
            <div className="col-md-7 mx-auto">
                <div className="row">
                    <div className="col-md-12">
                    <H1 className="text-center pt-5">Contact</H1></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                <div class="form-group">
                                        <label for="exampleInputEmail1">EMAIL</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                <label for="exampleInputEmail1">PHONE <small>(OPTIONAL)</small></label>
                                    <select value='' className='form-control' name="package">
                                        <option value>&nbsp;</option>
                                        <option value="Basic">Basic</option>
                                        <option value="Standard">Standard</option>
                                        <option value="Premium">Premium</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-md-12">
                            <div className="form-group">
                            <label name='message'>Message</label>
                                <textarea className='form-control' name="message" cols="30" rows="5"></textarea>
                            </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div></div>
            <div className="row">
                <div className="col-md-5"></div>
                    <div className="col-md-2">
                        <button className='btn btn-lg'>Send</button>
                    </div>
                <div className="col-md-5"></div>                   
            </div>
            </div>
        </div>
    </>);
}

export default Contact;
const H1 = styled.h1`
    text-align: center;
    padding: 3rem 0;
    color: rgb(93, 6, 175);
    font-weight:bolder;
    font-family: Comfortaa;
    `;
