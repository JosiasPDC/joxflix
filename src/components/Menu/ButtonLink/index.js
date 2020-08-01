//Antes do npm install syled-components
import React from 'react';
function ButtonLink(props) {
    //props => { className: "", href="/"}
    return (
        <a className={props.className}  href={props.herf}>
            {props.children}
        </a>
    );
}
export default ButtonLink;

