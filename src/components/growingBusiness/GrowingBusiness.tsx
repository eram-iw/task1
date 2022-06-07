import React, { useState } from "react";
import './GrowingBusiness.css'
import CheckIcon from '@mui/icons-material/Check';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Card from "../card/Card";
import Heading2 from "../non-atomic/Heading2";
import Paragraph from "../non-atomic/Paragraph";
import Anchor from "../non-atomic/Anchor";
import List from "../non-atomic/List";
import CloseIcon from '@mui/icons-material/Close';

const GrowingBusiness = () => {

    const [videoModal, setVideoModal] = useState(false);

    const showVideoModal = () => {
        setVideoModal(!videoModal);
    };
    return (
        <>
            <div className="section bg-white">
                <div className="container">
                    <div className="row justify-content-between align-items-center mb-5 pb-5">
                        <div className="col-lg-4">
                            <Heading2 className="heading mb-4 text-black">Why Growing Your Business is Important</Heading2>
                            <Paragraph>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae vitae nam facere hic quis voluptate cum quae. Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel rem eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam quisquam? Facere?</Paragraph>
                            <Paragraph className="mt-4"><Anchor link="#" className="btn btn-primary">Learn More</Anchor></Paragraph>
                        </div>
                        <div className="col-lg-7">
                            <img src="https://untree.co/demos/impact/images/illustration-1.jpg" alt="Image" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <Card img="https://untree.co/demos/impact/images/svg/24-hours-support.svg"
                                heading="Professional"
                                content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />
                        </div>
                        <div className="col-lg-4">
                            <Card img="https://untree.co/demos/impact/images/svg/good-review.svg"
                                heading="Good Review"
                                content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />
                        </div>
                        <div className="col-lg-4">
                            <Card img="https://untree.co/demos/impact/images/svg/quotation.svg"
                                heading="24/7 Support"
                                content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center mt-5 pt-5">
                        <div className="col-lg-4 order-lg-2 mb-4 mb-lg-0">
                            <Heading2 className="heading mb-4 text-black">Get Started with Impact</Heading2>
                            <p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae.</p>
                            <ul className="list-unstyled ul-check">
                                <CheckIcon className="check" /><List>Deserunt harum incidunt </List>

                                <CheckIcon className="check" /><List>Ex nesciunt est temporibus ipsum</List>
                                <CheckIcon className="check" /><List>Vel rem eveniet facere et velit sunt</List>
                                <CheckIcon className="check" /><List>Aspernatur eaque quis</List>
                                <CheckIcon className="check" /><List>Dolorem magnam quisquam? Facere</List>
                            </ul>
                            <Paragraph className="mt-4"><a href="/" className="btn btn-primary">Learn More</a></Paragraph>
                        </div>

                        {/* for video */}
                        <div className="col-lg-7">
                            <div className='button-play-video modals position-relative ' onClick={showVideoModal}>
                                <span className="icon-play"><PlayArrowIcon className="play" style={{
                                    position: 'relative',
                                    left: '26px',
                                    bottom: '-25px'
                                }} /></span>
                                <img src="https://untree.co/demos/impact/images/hero-min.jpg" alt="Image" className="img-fluid" onClick={showVideoModal} />
                            </div>
                            {videoModal ? (
                                <div className='video-container '>
                                    <div className='video'>
                                        <iframe
                                            src='https://www.youtube.com/embed/KI2lsdXJQ40?start=1'
                                            title='YouTube video player'
                                            frameBorder='0'
                                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                            allowFullScreen></iframe>
                                    </div>
                                    <div
                                        className='close-btn'
                                        onClick={showVideoModal}>
                                       <CloseIcon/>
                                    </div>
                                </div>
                            ) : null}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GrowingBusiness