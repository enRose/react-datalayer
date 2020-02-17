import React from "react";
import { WithNav } from '../components/nav'

const About = () => {
    return (
        <>
        <h2>About</h2>
        {WithNav('about', <button>next</button>)}
        </>
    )
}

export default About