import React from "react";


type FooterPropsType = {
    text: string
}


const Footer = (props: FooterPropsType) => {
    return (
        <div>{props.text}</div>
    );
}

export default Footer;