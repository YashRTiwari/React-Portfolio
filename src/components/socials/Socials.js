import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Socials.css'

export const Socials = () => {
    return(
        <div className="Socials">
            <LinkedInIcon style={{"fontSize" : "40px"}}/>
            <GitHubIcon style={{"fontSize" : "40px"}}/>
            <InstagramIcon style={{"fontSize" : "40px"}}/>
        </div>
    )
}
