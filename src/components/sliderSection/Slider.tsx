import React from "react";
import Heading3 from "../non-atomic/Heading3";
import Paragraph from "../non-atomic/Paragraph";
import Span from "../non-atomic/Span";

type sliderProp={
    img: string
    heading: string
    role: string
    description: string
}
const Slider=(props: sliderProp)=>{
    return(<>
    <div className="item tns-item tns-slide-active" id="tns1-item0">
                <div className="row justify-content-center">
                  <div className="col-lg-7 mx-auto">
                    <div className="testimonial bg-color-1 text-center">
                      <img
                        src={props.img}
                        alt="Image"
                        className="img-fluid"
                      />
                      <Heading3 className="font-weight-bold">{props.heading}</Heading3>
                      <Span className="position d-block mb-3">{props.role}</Span>
                      <blockquote>
                        <Paragraph>
                         {props.description}
                        </Paragraph>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
    </>)
}

export default Slider