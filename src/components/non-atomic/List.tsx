import React from "react";

type listProps = {
    children: string | React.ReactNode;
    className?: string
}

const List = (props: listProps) => {
    return (<>
        <li className={props.className}>
            {props.children}
        </li>
    </>)
}

export default List