import React, { useState } from "react";
import './VideoModal.css'
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VideoModal = () => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 2000)
    return (
        <>
            <div className="wrapper">

                <a href="#video-modal" className="button-play-video">
                    <span className="icon-play"><PlayArrowIcon className="play" style={{
                        position: 'relative',
                        left: '26px',
                        bottom: '-25px'
                    }} /></span>
                    <img src="https://untree.co/demos/impact/images/hero-min.jpg" alt="Image" className="img-fluid" />
                </a>

            </div>

            <div id="video-modal" className="modal">
                <div className="modal__content">
                    {loading ? <>
                        <div className="d-flex justify-content-center" style={{ background: '#141414' }}>
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </> :
                        <><div className=" main ratio  ratio-16x9">
                            <iframe src='https://www.youtube-nocookie.com/embed/KI2lsdXJQ40?autoplay=1&rel=0'
                                frameBorder='0'
                                allow='autoplay encrypted-media'
                                allowFullScreen
                                title='video'
                            />
                        </div></>}
                </div>
                <a href="" className="modal__close" onClick={() => {
                    setLoading(true)
                }}>X</a>
            </div>

        </>
    )
}

export default VideoModal