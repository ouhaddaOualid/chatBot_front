import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FooterStyle from '../Css/FooterStyle.css'
const Footer=()=>{
    return(
        <>
        <footer>
            <div className="container container-flex">
            <div className="icons">
        <FacebookIcon className="Icon"/>
        <InstagramIcon className="Icon"/>
        <TwitterIcon className="Icon"/>
        <LinkedInIcon className="Icon"/>
                 </div>
             <div className="line">
                 <hr/>
                 <hr/>
             </div>
             <div  className="copyright">All rights reserved &copy; 
             <p>Made with love by oualid</p>
             </div>
             </div>
        </footer>
        </>
    )
}

export default Footer