import React from "react";

type paraProps = {
    children:string | React.ReactNode
    className?:string
}

const Paragraph = (props: paraProps) => {
    return (<>
        <p className={props.className}>
            {props.children}
        </p>
    </>)
}

export default Paragraph