import React from "react";

type headingProps = {
    text: string;
}

const Heading1 = (props: headingProps) => {
    return (<>
        <h1>
            {props.text}
        </h1>
    </>)
}

export default Heading1