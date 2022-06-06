import React from "react";
import './SectionHero.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LayersIcon from '@mui/icons-material/Layers';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import Heading1 from "../non-atomic/Heading1";
import CardSecHero from "./CardSecHero";
import Paragraph from "../non-atomic/Paragraph";

const SectionHero = () => {
    return (
        <>
            <div className="section-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto text-center hero-intro">
                            <Heading1 text="Let's growth your business with us" />
                            <div className="masthead mb-5">
                                <Paragraph>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</Paragraph>
                            </div>
                            <p><a href="contact.html" className="btn btn-primary">Get In Touch</a></p>
                            <div className="persons-1">
                                <img src="https://untree.co/demos/impact/images/persons-group-1.png" alt="Image" className="img-fluid" />
                            </div>
                            <div className="persons-2">
                                <img src="https://untree.co/demos/impact/images/persons-group-2.png" alt="Image" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="box">
                        <div className="row">
                            <CardSecHero
                                icon={<LayersIcon className="icon-layers" />}
                                heading="Design"
                                content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />
                            <CardSecHero
                                icon={<PhonelinkIcon className="icon-layers" />}
                                heading="Applications"
                                content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />
                            <CardSecHero
                                icon={<LocalMallIcon className="icon-layers" />}
                                heading="eCommerce"
                                content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionHero