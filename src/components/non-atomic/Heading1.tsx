import React from "react";

type headingProps = {
    text: string;
    className?: string
}

const Heading1 = (props: headingProps) => {
    return (<>
        <h1 className={props.className}>
            {props.text}
        </h1>
    </>)
}

export default Heading1