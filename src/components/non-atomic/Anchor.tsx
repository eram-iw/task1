import React from 'react'

type AnchorProps={
    children: React.ReactNode
    link:string
    className?: string
}

const Anchor = (props: AnchorProps) => {
    return <><a className={props.className} href={props.link}>{props.children}</a></>
}

export default Anchor
