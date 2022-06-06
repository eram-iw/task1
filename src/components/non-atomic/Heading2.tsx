import React from "react";

type headingProps = {
    children: string | React.ReactNode;
    className?: string
}

const Heading2 = (props: headingProps) => {
    return (<>
        <h2 className={props.className}>
            {props.children}
        </h2>
    </>)
}

export default Heading2