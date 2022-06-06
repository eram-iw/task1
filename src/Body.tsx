import React from 'react'
import BlogPost from './components/blogPost/BlogPost'
import GrowingBusiness from './components/growingBusiness/GrowingBusiness'
import SectionHero from './components/sectionHero/SectionHero'
import SliderSection from './components/sliderSection/SliderSection'
import WhyUs from './components/whyUs/WhyUs'


function Body() {
    return (
        <>
            <SectionHero />
            <WhyUs />
            <GrowingBusiness />
            <SliderSection />
            <BlogPost />
        </>
    )
}

export default Body
