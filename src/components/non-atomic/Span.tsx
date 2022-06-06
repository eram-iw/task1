import React from "react";

type spanProps = {
    children?: string;
    className?: string
}

const Span = (props: spanProps) => {
    return (<>
        <span className={props.className}>
            {props.children}
        </span>
    </>)
}

export default Span