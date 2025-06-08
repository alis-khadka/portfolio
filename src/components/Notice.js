import './Notice.scss';

import TypeIt from "typeit-react";

function Notice() {
    return (
        <p className="notice">
            I'm looking for <span className='fw-bold fs-5 hover-underline-animation'>Software Engineering</span> role starting <span className='fw-bold fs-5 hover-underline-animation'>January 2026</span>!!!
            <br />
            <TypeIt
                options={{
                    loop: true,
                    speed: 40,
                    waitUntilVisible: true,
                }}
                getBeforeInit={(instance) => {
                    instance.type("Let's talk")
                    .pause(1225)
                    .delete(4)
                    .pause(400)
                    .type("connect and build something great together.");

                    return instance;
                }}
            />
        </p>
    );
}

export default Notice;
