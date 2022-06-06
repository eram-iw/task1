import React from "react";

type widgetProps = {
    children?: string | React.ReactNode;
}

const Widget = (props: widgetProps) => {
    return (
        <div className="widget">
            {props.children}
        </div>
    )
}

export default Widget