import './Notice.scss';

import TypeIt from "typeit-react";

function Notice() {
    return (
        <p className="notice">
            I'm looking for <span className='fw-bold fs-5 hover-underline-animation'>Software Engineering Intern</span> role!!!
            <br />
            <TypeIt
                options={{
                    loop: true,
                    speed: 40,
                }}
                getBeforeInit={(instance) => {
                    instance.type("Let's talk")
                    .pause(1225)
                    .delete(4)
                    .pause(400)
                    .type("catch-up to discuss how we can benefit eachother.");

                    return instance;
                }}
            />
        </p>
    );
}

export default Notice;
