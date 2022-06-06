import React from "react";
import Heading3 from "../non-atomic/Heading3";
import Paragraph from "../non-atomic/Paragraph";

type cardProp = {
    img: string
    heading: string
    content: string
}

const Card = (props: cardProp) => {
    return (<>
        <div className="d-flex feature-2">
            <div className="icon">
                <img src={props.img} alt="Image" className="img-fluid" />
            </div>
            <div>
                <Heading3>{props.heading}</Heading3>
                <Paragraph>{props.content}</Paragraph>
            </div>
        </div>
    </>)
}

export default Card