import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Heading3 from "../non-atomic/Heading3";
import Paragraph from "../non-atomic/Paragraph";

type cardProp = {
    icon?: Element | any
    heading: string
    content: string
}

const CardSecHero = (props: cardProp) => {
    return (
        <div className="col-lg-4">
            <div className="d-lg-flex feature">
                <div>
                    {props.icon}
                </div>
                <div>
                    <Heading3>{props.heading}</Heading3>
                    <Paragraph>{props.content}</Paragraph>
                </div>
            </div>
        </div>
    )
}

export default CardSecHero