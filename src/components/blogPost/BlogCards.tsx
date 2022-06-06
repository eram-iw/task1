import React from "react";
import Anchor from "../non-atomic/Anchor";
import Heading2 from "../non-atomic/Heading2";
import Paragraph from "../non-atomic/Paragraph";
import Span from "../non-atomic/Span";

type cardProps = {
    img: string,
    href: string,
    date: string,
    comment: string,
}

const BlogCards = (props: cardProps) => {
    return (<>
        <div className="col">
            <div className="card h-100" style={{
                padding: '10px',
                borderRadius: '8px',
                background: ' #fff',
                border: 'none'
            }}>
                <Anchor link={props.href}><img src={props.img} className="card-img-top" alt="Image" /></Anchor>
                <div className="card-body">
                    <div className="meta">
                        <Span>{props.date}</Span>
                        <Span>•</Span>
                        <Span>{props.comment}</Span>
                    </div>
                    <Heading2 ><Anchor link={props.href}>Important of getting a notifications</Anchor></Heading2>
                    <Paragraph>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</Paragraph>
                    <Paragraph><Anchor link="#" className="d-flex align-items-center"><Span>Read more</Span> <Span className="icon-navigate_next"></Span></Anchor></Paragraph>
                </div>
            </div>
        </div>
    </>)
}

export default BlogCards