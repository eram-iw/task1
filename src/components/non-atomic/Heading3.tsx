import React from "react";

type headingProps = {
    children: React.ReactNode | string
    className?: string
}

const Heading3 = (props: headingProps) => {
    return (<>
        <h3 className={props.className}>
            {props.children}
        </h3>
    </>)
}

export default Heading3