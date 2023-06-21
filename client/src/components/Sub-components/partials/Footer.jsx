import React from "react";

// footer section
const Footer = ()=> {
    var year = new Date();
    var thisYear = year.getFullYear(); 
    return (
        <footer>
            <p>Copyright &#169; {thisYear}</p>
        </footer>
    );
}

export default Footer;
