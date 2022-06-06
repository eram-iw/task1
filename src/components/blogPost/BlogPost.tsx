import React from "react";
import Heading2 from "../non-atomic/Heading2";
import Paragraph from "../non-atomic/Paragraph";
import './BlogPost.css'
import BlogCards from "./BlogCards";

const BlogPost = () => {
    return (
        <>
            <div className="section bg-white">
                <div className="container">
                    <div className="row mb-5 text-center">
                        <div className="col-7 mx-auto text-center">
                            <Heading2 className="heading mb-3 text-black">Blog Posts</Heading2>
                            <Paragraph>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</Paragraph>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 post-entry">
                        <BlogCards img="https://untree.co/demos/impact/images/post_2.jpg" href="single.html" date="May 27, 2021" comment="12 Comments"/>
                        <BlogCards img="https://untree.co/demos/impact/images/post_3.jpg" href="single.html" date="May 27, 2021" comment="12 Comments"/>
                        <BlogCards img="https://untree.co/demos/impact/images/post_4.jpg" href="single.html" date="May 27, 2021" comment="12 Comments"/>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPost