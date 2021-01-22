import React from 'react'
import './Home.css';
import AndroidIcon from '@material-ui/icons/Android';
import { Socials } from '../socials/Socials';
import { Divider } from '@material-ui/core';

export default function Home() {


    return (
        <div className="Home">
            <div id="intro-1">Namaste! I'm</div>
            <div id="intro-2">Yash Tiwari</div>

            <div id="intro-3">
                <AndroidIcon  fontSize="large" htmlColor="#43ab49"/>
                <div>Android Developer</div> 
               <AndroidIcon  fontSize="large" htmlColor="#43ab49"/>
            </div>

            <div id="intro-4"> 
                I love programming, especially making useful applications 
                and interested in making cutting edge products that fit in your pocket.
            </div>

            <Divider width="200px"/>

            <Socials/>
        </div>
       
    )
}
