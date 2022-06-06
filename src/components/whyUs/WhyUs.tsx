import React from "react";
import Card from "../card/Card";
import Heading2 from "../non-atomic/Heading2";
import Paragraph from "../non-atomic/Paragraph";
import './WhyUs.css'

const WhyUs = () => {
    return (
        <>
            <div className="section why-us-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <Heading2 className="heading mb-5 text-black">Why You Should Choose Us</Heading2>
                            <Card img="https://untree.co/demos/impact/images/svg/24-hours-support.svg"
                                heading="Professional"
                                content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />
                            <Card img="https://untree.co/demos/impact/images/svg/good-review.svg"
                                heading="Good Review"
                                content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />
                        </div>
                        <div className="col-lg-6">
                            <Paragraph><img src="https://untree.co/demos/impact/images/about-us-min.png" alt="Image" className="img-fluid" /></Paragraph>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs