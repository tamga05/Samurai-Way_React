import React from "react";


type HeaderPropsType = {
    navLink: Array<HeaderLink>
}

export type HeaderLink = {
    id: number,
    span: string
}


const Header = (props: HeaderPropsType) => {
    return (
        <div>
            <a href="#">{props.navLink[0].span}</a>
            <a href="#">{props.navLink[1].span}</a>
            <a href="#">{props.navLink[2].span}</a>
        </div>
    );
}

export default Header;

