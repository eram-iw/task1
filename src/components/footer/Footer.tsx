import React from "react";
import './Footer.css'
import 'font-awesome/css/font-awesome.min.css';
import Paragraph from "../non-atomic/Paragraph";
import Anchor from "../non-atomic/Anchor";
import Heading3 from "../non-atomic/Heading3";
import Span from "../non-atomic/Span";
import List from "../non-atomic/List";
import Widget from "./Widget";

const Footer = () => {
    return (        
            <div className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Widget>
                                <Heading3 >About Impact<Span className="text-primary">.</Span></Heading3>
                                <Paragraph>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Paragraph>
                                <ul className="list-unstyled social mt-4">
                                    <List><Anchor link="#"><Span className="fa fa-instagram"></Span></Anchor> </List>
                                    <List><Anchor link="#"><Span className="fa fa-twitter"></Span></Anchor> </List>
                                    <List><Anchor link="#"><Span className="fa fa-facebook"></Span></Anchor> </List>
                                    <List><Anchor link="#"><Span className="fa fa-linkedin"></Span></Anchor> </List>
                                    <List><Anchor link="#"><Span className=" fa fa-pinterest"></Span></Anchor> </List>
                                    <List><Anchor link="#"><Span className="fa fa-dribbble"></Span></Anchor> </List>
                                </ul>
                            </Widget>
                        </div>
                        <div className="col-lg-2 ml-auto">
                            <Widget>
                                <Heading3>Links</Heading3>
                                <ul className="list-unstyled float-left links">
                                    <List><Anchor link="#">About us</Anchor> </List>
                                    <List><Anchor link="#">Services</Anchor> </List>
                                    <List><Anchor link="#">News</Anchor> </List>
                                    <List><Anchor link="#">Careers</Anchor> </List>
                                    <List><Anchor link="#">Contact</Anchor> </List>
                                </ul>
                            </Widget>
                        </div>
                        <div className="col-lg-2">
                            <Widget>
                                <Heading3>Company</Heading3>
                                <ul className="list-unstyled float-left links">
                                    <List><Anchor link="#">About us</Anchor> </List>
                                    <List><Anchor link="#">Services</Anchor> </List>
                                    <List><Anchor link="#">News</Anchor> </List>
                                    <List><Anchor link="#">Careers</Anchor> </List>
                                    <List><Anchor link="#">Contact</Anchor> </List>
                                </ul>
                            </Widget>
                        </div>
                        <div className="col-lg-3">
                            <Widget>
                                <Heading3>Contact</Heading3>
                                <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                                <ul className="list-unstyled links mb-4">
                                    <List><Anchor link="tel://11234567890">+1(123)-456-7890</Anchor> </List>
                                    <List><Anchor link="tel://11234567890">+1(123)-456-7890</Anchor> </List>
                                    <List><Anchor link="mailto:info@mydomain.com">info@mydomain.com</Anchor> </List>
                                </ul>
                            </Widget>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-center" style={{
                            display: 'flex',
                            margin: 'auto',
                            justifyContent: 'center'
                        }}>
                            <Paragraph className="mx-1">Copyright ©2022. All Rights Reserved. — Designed with love by</Paragraph> <Anchor link="https://untree.co" >Untree.co</Anchor>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer